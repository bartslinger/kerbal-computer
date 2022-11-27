import { Airplane } from "./airplane";

export interface AutopilotSetpoint {
  roll: number;
  pitch: number;
  altitude: number;
  velocity: number;
}

export class AirplaneAutopilot {
  airplane: Airplane;

  constructor(airplane: Airplane) {
    this.airplane = airplane;
  }

  async loop(setpoint: AutopilotSetpoint) {
    console.log("autopilot loop");
    const data = await Promise.all([
      this.airplane.spaceCenter!.getUt(),
      this.airplane.flight!.getRoll(),
      this.airplane.flight!.getPitch(),
      this.airplane.flight!.getHeading(),
      this.airplane.flight!.getMeanAltitude(),
      this.airplane.activeVessel!.velocity(this.airplane.referenceFrame!),
    ]);

    // roll control
    const rollError = setpoint.roll - data[1];
    const rollCmd = 0.01 * rollError;
    this.airplane.control?.setRoll(rollCmd);

    // altitude control
    const altitudeError = setpoint.altitude - data[4];
    const pitchTarget = Math.max(Math.min(0.1 * altitudeError, 15.0), -15.0);
    console.log(altitudeError, pitchTarget);
    // pitch control
    const pitchError = pitchTarget - data[2];
    const pitchCmd = 0.1 * pitchError;
    this.airplane.control?.setPitch(pitchCmd);

    // velocity control
    const velocity = Math.sqrt(
      data[5][0] * data[5][0] +
        data[5][1] * data[5][1] +
        data[5][2] * data[5][2]
    );
    const velocityError = setpoint.velocity - velocity;
    const accelerationSetpoint = 0.1 * velocityError;
    this.airplane.control?.setThrottle(0.3 + accelerationSetpoint);
  }
}
