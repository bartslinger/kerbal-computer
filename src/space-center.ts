import Long from "long";

export namespace SpaceCenter {
  export class Control {
    private id: Long;
    constructor(id: Long) {
      this.id = id;
    }
  }

  export class Vessel {
    private id: Long;
    constructor(id: Long) {
      this.id = id;
    }

    getControl(): Control {
      return new Control(Long.fromInt(0));
    }
  }
}
