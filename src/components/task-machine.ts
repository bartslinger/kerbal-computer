import { Airplane } from "./airplane";
import { BehaviorSubject, firstValueFrom, Subject } from "rxjs";
import { AutoPilot } from "../generated/services/space-center";
import { AirplaneAutopilot, AutopilotSetpoint } from "./autopilot";

enum Task {
  Standby,
  ReadyForTakeoff,
  Takeoff,
  Climb,
  Autopilot,
}

enum Objective {
  Flying,
  Autopilot,
}

export class TaskMachine {
  airplane: Airplane;
  objective: Subject<Objective>;
  public autopilotSetpoint: BehaviorSubject<AutopilotSetpoint>;

  constructor() {
    this.airplane = new Airplane();
    this.objective = new Subject();
    this.autopilotSetpoint = new BehaviorSubject({
      roll: 0.0,
      pitch: 0.0,
      velocity: 50.0,
    });
  }

  async init() {
    await this.airplane.init();
  }

  async trigger() {
    console.log("set");
    this.objective.next(Objective.Flying);
  }

  async run() {
    // shared variables etc
    let next = Task.Standby;

    for (;;) {
      if (next === Task.Standby) {
        next = await standby(this.objective);
      } else if (next === Task.Takeoff) {
        next = await takeoff(this.airplane);
      } else if (next === Task.Autopilot) {
        await flyAutopilot(this.airplane, this.autopilotSetpoint);
      } else {
        console.log("no task");
        break;
      }
    }
  }
}

async function standby(objective: Subject<Objective>): Promise<Task> {
  console.log(standby);
  console.log("wainting");
  const lol = await firstValueFrom(objective);
  console.log("done", lol);

  return Task.Autopilot;
}

async function takeoff(airplane: Airplane): Promise<Task> {
  console.log("takeoff!");

  airplane.control?.setThrottle(1.0);
  airplane.control?.setBrakes(false);
  airplane.control?.activateNextStage();

  for (;;) {
    const data = await Promise.all([
      airplane.spaceCenter!.getUt(),
      airplane.flight!.getRoll(),
      airplane.flight!.getPitch(),
      airplane.flight!.getHeading(),
      airplane.flight!.getMeanAltitude(),
      airplane.activeVessel?.velocity(airplane.referenceFrame!),
    ]);

    // steering control
    const headingError = 90.0 - data[3];
    const steeringCmd = -0.1 * headingError;
    airplane.control?.setWheelSteering(steeringCmd);

    // pitch control
    const pitchError = 20.0 - data[2];
    const pitchCmd = 0.1 * pitchError;
    airplane.control?.setPitch(pitchCmd);

    const altitude = data[4];
    if (altitude > 500.0) {
      break;
    }
  }

  airplane.control?.setGear(false);

  return Task.Autopilot;
}

async function flyAutopilot(
  airplane: Airplane,
  setpoint: BehaviorSubject<AutopilotSetpoint>
): Promise<Task> {
  const autopilot = new AirplaneAutopilot(airplane);

  for (;;) {
    const sp = setpoint.getValue();
    await Promise.all([autopilot.loop(sp)]);
  }
  return Task.Standby;
}
