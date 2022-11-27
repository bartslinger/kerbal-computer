import { Airplane } from "./airplane";

enum Task {
  Standby,
  ReadyForTakeoff,
  Takeoff,
  Climb,
}

export class TaskMachine {
  airplane: Airplane;

  constructor() {
    this.airplane = new Airplane();
  }

  async init() {
    await this.airplane.init();
  }

  async run() {
    // shared variables etc
    let next = Task.Standby;

    if (next === Task.Standby) {
      next = await standby();
    } else if (next === Task.Takeoff) {
      next = await takeoff(this.airplane);
    } else {
      console.log("no task");
    }
  }
}

async function standby(): Promise<Task> {
  console.log(standby);

  return Task.ReadyForTakeoff;
}

async function takeoff(airplane: Airplane): Promise<Task> {
  return Task.Climb;
}
