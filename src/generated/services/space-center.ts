/* eslint-disable no-unused-vars */
// Generated file DO NOT EDIT
import Long from "long";
import { KRPCConnection } from "../../services/connection";
import * as krpc from "../proto/krpc";
import * as encoding from "../../services/encoding";
import ByteBuffer from "bytebuffer";
ByteBuffer.DEFAULT_ENDIAN = true;

export enum WheelState {
  Deployed = 0,
  Retracted = 1,
  Deploying = 2,
  Retracting = 3,
  Broken = 4,
}

export enum ControlInputMode {
  Additive = 0,
  Override = 1,
}

export enum ResourceFlowMode {
  Vessel = 0,
  Stage = 1,
  Adjacent = 2,
  None = 3,
}

export enum CommLinkType {
  Home = 0,
  Control = 1,
  Relay = 2,
}

export enum ParachuteState {
  Stowed = 0,
  Armed = 1,
  Active = 2,
  SemiDeployed = 3,
  Deployed = 4,
  Cut = 5,
}

export enum SASMode {
  StabilityAssist = 0,
  Maneuver = 1,
  Prograde = 2,
  Retrograde = 3,
  Normal = 4,
  AntiNormal = 5,
  Radial = 6,
  AntiRadial = 7,
  Target = 8,
  AntiTarget = 9,
}

export enum ControlState {
  Full = 0,
  Partial = 1,
  None = 2,
}

export enum ContractState {
  Active = 0,
  Canceled = 1,
  Completed = 2,
  DeadlineExpired = 3,
  Declined = 4,
  Failed = 5,
  Generated = 6,
  Offered = 7,
  OfferExpired = 8,
  Withdrawn = 9,
}

export enum RadiatorState {
  Extended = 0,
  Retracted = 1,
  Extending = 2,
  Retracting = 3,
  Broken = 4,
}

export enum DockingPortState {
  Ready = 0,
  Docked = 1,
  Docking = 2,
  Undocking = 3,
  Shielded = 4,
  Moving = 5,
}

export enum ControlSource {
  Kerbal = 0,
  Probe = 1,
  None = 2,
}

export enum CrewMemberType {
  Applicant = 0,
  Crew = 1,
  Tourist = 2,
  Unowned = 3,
}

export enum CameraMode {
  Automatic = 0,
  Free = 1,
  Chase = 2,
  Locked = 3,
  Orbital = 4,
  IVA = 5,
  Map = 6,
}

export enum ResourceConverterState {
  Running = 0,
  Idle = 1,
  MissingResource = 2,
  StorageFull = 3,
  Capacity = 4,
  Unknown = 5,
}

export enum ResourceHarvesterState {
  Deploying = 0,
  Deployed = 1,
  Retracting = 2,
  Retracted = 3,
  Active = 4,
}

export enum VesselSituation {
  PreLaunch = 0,
  Orbiting = 1,
  SubOrbital = 2,
  Escaping = 3,
  Flying = 4,
  Landed = 5,
  Splashed = 6,
  Docked = 7,
}

export enum VesselType {
  Base = 0,
  Debris = 1,
  Lander = 2,
  Plane = 3,
  Probe = 4,
  Relay = 5,
  Rover = 6,
  Ship = 7,
  Station = 8,
}

export enum AntennaState {
  Deployed = 0,
  Retracted = 1,
  Deploying = 2,
  Retracting = 3,
  Broken = 4,
}

export enum MotorState {
  Idle = 0,
  Running = 1,
  Disabled = 2,
  Inoperable = 3,
  NotEnoughResources = 4,
}

export enum SolarPanelState {
  Extended = 0,
  Retracted = 1,
  Extending = 2,
  Retracting = 3,
  Broken = 4,
}

export enum GameMode {
  Sandbox = 0,
  Career = 1,
  Science = 2,
  ScienceSandbox = 3,
  Mission = 4,
  MissionBuilder = 5,
  Scenario = 6,
  ScenarioNonResumable = 7,
}

export enum CargoBayState {
  Open = 0,
  Closed = 1,
  Opening = 2,
  Closing = 3,
}

export enum LegState {
  Deployed = 0,
  Retracted = 1,
  Deploying = 2,
  Retracting = 3,
  Broken = 4,
}

export enum SpeedMode {
  Orbit = 0,
  Surface = 1,
  Target = 2,
}

export enum WarpMode {
  Rails = 0,
  Physics = 1,
  None = 2,
}

export class SpaceCenter {
  private conn: KRPCConnection;
  constructor(conn: KRPCConnection) {
    this.conn = conn;
  }

  async clearTarget(): Promise<void> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ClearTarget",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async launchableVessels(craftDirectory: string): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(craftDirectory),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchableVessels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async launchVessel(
    craftDirectory: string,
    name: string,
    launchSite: string,
    recover?: boolean
  ): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(craftDirectory),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    args.push({
      position: 2,
      value: encoding.encodeString(launchSite),
    });
    if (recover !== undefined) {
      args.push({
        position: 3,
        value: encoding.encodeBool(recover),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async launchVesselFromVab(name: string, recover?: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(name),
    });
    if (recover !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeBool(recover),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchVesselFromVAB",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async launchVesselFromSph(name: string, recover?: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(name),
    });
    if (recover !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeBool(recover),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchVesselFromSPH",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async save(name: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Save",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async load(name: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Load",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async quicksave(): Promise<void> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Quicksave",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async quickload(): Promise<void> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Quickload",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async canRailsWarpAt(factor?: number): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    if (factor !== undefined) {
      args.push({
        position: 0,
        value: encoding.encodeSint32(factor),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CanRailsWarpAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeBool(conn, result.value);
  }

  async warpTo(
    ut: number,
    maxRailsRate?: number,
    maxPhysicsRate?: number
  ): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeDouble(ut),
    });
    if (maxRailsRate !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeFloat(maxRailsRate),
      });
    }
    if (maxPhysicsRate !== undefined) {
      args.push({
        position: 2,
        value: encoding.encodeFloat(maxPhysicsRate),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "WarpTo",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async transformPosition(
    position: [number, number, number],
    from: ReferenceFrame,
    to: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(from.id),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(to.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async transformDirection(
    direction: [number, number, number],
    from: ReferenceFrame,
    to: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeTuple(direction),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(from.id),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(to.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformDirection",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async transformRotation(
    rotation: [number, number, number, number],
    from: ReferenceFrame,
    to: ReferenceFrame
  ): Promise<[number, number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeTuple(rotation),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(from.id),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(to.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformRotation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
      encoding.decodeDouble(conn, tuple[3]),
    ];
  }

  async transformVelocity(
    position: [number, number, number],
    velocity: [number, number, number],
    from: ReferenceFrame,
    to: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(velocity),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(from.id),
    });
    args.push({
      position: 3,
      value: encoding.encodeVarint64(to.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformVelocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async raycastDistance(
    position: [number, number, number],
    direction: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(direction),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RaycastDistance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async raycastPart(
    position: [number, number, number],
    direction: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(direction),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RaycastPart",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Part.decode(conn, result.value);
  }

  async getGameMode(): Promise<GameMode> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_GameMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: GameMode = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getScience(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Science",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getFunds(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Funds",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getReputation(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Reputation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getActiveVessel(): Promise<Vessel> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_ActiveVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Vessel.decode(conn, result.value);
  }

  async setActiveVessel(value: Vessel): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_ActiveVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getVessels(): Promise<Vessel[]> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Vessels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Vessel.decode(conn, item);
    });
  }

  async getBodies(): Promise<Record<string, CelestialBody>> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Bodies",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const dict = encoding.decodeDict(conn, result.value).entries;
    return dict.reduce((obj: Record<string, CelestialBody>, item) => {
      const key = encoding.decodeString(conn, item.key);
      const value = CelestialBody.decode(conn, item.value);
      obj[key] = value;
      return obj;
    }, {});
  }

  async getTargetBody(): Promise<CelestialBody> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_TargetBody",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return CelestialBody.decode(conn, result.value);
  }

  async setTargetBody(value: CelestialBody): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_TargetBody",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTargetVessel(): Promise<Vessel> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_TargetVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Vessel.decode(conn, result.value);
  }

  async setTargetVessel(value: Vessel): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_TargetVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTargetDockingPort(): Promise<DockingPort> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_TargetDockingPort",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return DockingPort.decode(conn, result.value);
  }

  async setTargetDockingPort(value: DockingPort): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_TargetDockingPort",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getWaypointManager(): Promise<WaypointManager> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WaypointManager",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return WaypointManager.decode(conn, result.value);
  }

  async getContractManager(): Promise<ContractManager> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_ContractManager",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ContractManager.decode(conn, result.value);
  }

  async getCamera(): Promise<Camera> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Camera",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Camera.decode(conn, result.value);
  }

  async getUiVisible(): Promise<boolean> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_UIVisible",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setUiVisible(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_UIVisible",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getNavball(): Promise<boolean> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Navball",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setNavball(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_Navball",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getUt(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_UT",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getG(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_G",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getWarpMode(): Promise<WarpMode> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WarpMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: WarpMode = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getWarpRate(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WarpRate",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getWarpFactor(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WarpFactor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getRailsWarpFactor(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_RailsWarpFactor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async setRailsWarpFactor(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_RailsWarpFactor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPhysicsWarpFactor(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_PhysicsWarpFactor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async setPhysicsWarpFactor(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_PhysicsWarpFactor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getMaximumRailsWarpFactor(): Promise<number> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_MaximumRailsWarpFactor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getFarAvailable(): Promise<boolean> {
    const conn = this.conn;
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_FARAvailable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }
}

export class Antenna {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Antenna(conn, bb.readVarint64());
  }

  async transmit(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_Transmit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async cancel(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_Cancel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getState(): Promise<AntennaState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: AntennaState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getDeployable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_Deployable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setDeployed(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_set_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getCanTransmit(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_CanTransmit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getAllowPartial(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_AllowPartial",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setAllowPartial(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_set_AllowPartial",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPower(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_Power",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getCombinable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_Combinable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCombinableExponent(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_CombinableExponent",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getPacketInterval(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_PacketInterval",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getPacketSize(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_PacketSize",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getPacketResourceCost(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Antenna_get_PacketResourceCost",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  // static methods
}
export class AutoPilot {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new AutoPilot(conn, bb.readVarint64());
  }

  async engage(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_Engage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async disengage(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_Disengage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async wait(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_Wait",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async targetPitchAndHeading(pitch: number, heading: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(pitch),
    });
    args.push({
      position: 2,
      value: encoding.encodeFloat(heading),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_TargetPitchAndHeading",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getError(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_Error",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getPitchError(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_PitchError",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getHeadingError(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_HeadingError",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getRollError(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_RollError",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async setReferenceFrame(value: ReferenceFrame): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTargetPitch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_TargetPitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setTargetPitch(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_TargetPitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTargetHeading(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_TargetHeading",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setTargetHeading(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_TargetHeading",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTargetRoll(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_TargetRoll",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setTargetRoll(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_TargetRoll",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTargetDirection(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_TargetDirection",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setTargetDirection(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_TargetDirection",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSas(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_SAS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setSas(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_SAS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSasMode(): Promise<SASMode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_SASMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: SASMode = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async setSasMode(value: SASMode): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_SASMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRollThreshold(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_RollThreshold",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setRollThreshold(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_RollThreshold",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getStoppingTime(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_StoppingTime",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setStoppingTime(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_StoppingTime",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getDecelerationTime(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_DecelerationTime",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setDecelerationTime(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_DecelerationTime",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAttenuationAngle(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_AttenuationAngle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setAttenuationAngle(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_AttenuationAngle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAutoTune(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_AutoTune",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setAutoTune(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_AutoTune",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTimeToPeak(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_TimeToPeak",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setTimeToPeak(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_TimeToPeak",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getOvershoot(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_Overshoot",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setOvershoot(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_Overshoot",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPitchPidGains(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_PitchPIDGains",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setPitchPidGains(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_PitchPIDGains",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRollPidGains(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_RollPIDGains",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setRollPidGains(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_RollPIDGains",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getYawPidGains(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_get_YawPIDGains",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setYawPidGains(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_YawPIDGains",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
}
export class Camera {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Camera(conn, bb.readVarint64());
  }

  async getMode(): Promise<CameraMode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_Mode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: CameraMode = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async setMode(value: CameraMode): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_set_Mode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPitch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_Pitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setPitch(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_set_Pitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getHeading(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_Heading",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setHeading(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_set_Heading",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getDistance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_Distance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setDistance(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_set_Distance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getMinPitch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_MinPitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMaxPitch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_MaxPitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMinDistance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_MinDistance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMaxDistance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_MaxDistance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getDefaultDistance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_DefaultDistance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getFocussedBody(): Promise<CelestialBody> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_FocussedBody",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return CelestialBody.decode(conn, result.value);
  }

  async setFocussedBody(value: CelestialBody): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_set_FocussedBody",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getFocussedVessel(): Promise<Vessel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_FocussedVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Vessel.decode(conn, result.value);
  }

  async setFocussedVessel(value: Vessel): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_set_FocussedVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getFocussedNode(): Promise<Node> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_get_FocussedNode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Node.decode(conn, result.value);
  }

  async setFocussedNode(value: Node): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Camera_set_FocussedNode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
}
export class CargoBay {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new CargoBay(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CargoBay_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getState(): Promise<CargoBayState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CargoBay_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: CargoBayState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getOpen(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CargoBay_get_Open",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setOpen(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CargoBay_set_Open",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
}
export class CelestialBody {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new CelestialBody(conn, bb.readVarint64());
  }

  async surfaceHeight(latitude: number, longitude: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_SurfaceHeight",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async bedrockHeight(latitude: number, longitude: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_BedrockHeight",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async mslPosition(
    latitude: number,
    longitude: number,
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    args.push({
      position: 3,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_MSLPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async surfacePosition(
    latitude: number,
    longitude: number,
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    args.push({
      position: 3,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_SurfacePosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async bedrockPosition(
    latitude: number,
    longitude: number,
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    args.push({
      position: 3,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_BedrockPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async positionAtAltitude(
    latitude: number,
    longitude: number,
    altitude: number,
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    args.push({
      position: 3,
      value: encoding.encodeDouble(altitude),
    });
    args.push({
      position: 4,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_PositionAtAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async latitudeAtPosition(
    position: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_LatitudeAtPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async longitudeAtPosition(
    position: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_LongitudeAtPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async altitudeAtPosition(
    position: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_AltitudeAtPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async atmosphericDensityAtPosition(
    position: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_AtmosphericDensityAtPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async temperatureAt(
    position: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_TemperatureAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async densityAt(altitude: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(altitude),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_DensityAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async pressureAt(altitude: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(altitude),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_PressureAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async biomeAt(latitude: number, longitude: number): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_BiomeAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeString(conn, result.value);
  }

  async position(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_Position",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async velocity(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_Velocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async rotation(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_Rotation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
      encoding.decodeDouble(conn, tuple[3]),
    ];
  }

  async direction(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_Direction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async angularVelocity(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_AngularVelocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getSatellites(): Promise<CelestialBody[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_Satellites",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return CelestialBody.decode(conn, item);
    });
  }

  async getMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_Mass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getGravitationalParameter(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_GravitationalParameter",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSurfaceGravity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_SurfaceGravity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getRotationalPeriod(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_RotationalPeriod",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getRotationalSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_RotationalSpeed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getRotationAngle(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_RotationAngle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getInitialRotation(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_InitialRotation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getEquatorialRadius(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_EquatorialRadius",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSphereOfInfluence(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_SphereOfInfluence",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getOrbit(): Promise<Orbit> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_Orbit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Orbit.decode(conn, result.value);
  }

  async getHasAtmosphere(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_HasAtmosphere",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getAtmosphereDepth(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_AtmosphereDepth",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getHasAtmosphericOxygen(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_HasAtmosphericOxygen",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getBiomes(): Promise<Set<string>> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_Biomes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const set: Set<string> = new Set();
    encoding.decodeSet(conn, result.value).items.forEach((item) => {
      set.add(encoding.decodeString(conn, item));
    });
    return set;
  }

  async getFlyingHighAltitudeThreshold(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_FlyingHighAltitudeThreshold",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSpaceHighAltitudeThreshold(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_SpaceHighAltitudeThreshold",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getNonRotatingReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_NonRotatingReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getOrbitalReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CelestialBody_get_OrbitalReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  // static methods
}
export class CommLink {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new CommLink(conn, bb.readVarint64());
  }

  async getType(): Promise<CommLinkType> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommLink_get_Type",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: CommLinkType = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getSignalStrength(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommLink_get_SignalStrength",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getStart(): Promise<CommNode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommLink_get_Start",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return CommNode.decode(conn, result.value);
  }

  async getEnd(): Promise<CommNode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommLink_get_End",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return CommNode.decode(conn, result.value);
  }

  // static methods
}
export class CommNode {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new CommNode(conn, bb.readVarint64());
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommNode_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getIsHome(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommNode_get_IsHome",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getIsControlPoint(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommNode_get_IsControlPoint",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getIsVessel(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommNode_get_IsVessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getVessel(): Promise<Vessel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CommNode_get_Vessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Vessel.decode(conn, result.value);
  }

  // static methods
}
export class Comms {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Comms(conn, bb.readVarint64());
  }

  async getCanCommunicate(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Comms_get_CanCommunicate",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCanTransmitScience(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Comms_get_CanTransmitScience",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getSignalStrength(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Comms_get_SignalStrength",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getSignalDelay(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Comms_get_SignalDelay",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getPower(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Comms_get_Power",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getControlPath(): Promise<CommLink[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Comms_get_ControlPath",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return CommLink.decode(conn, item);
    });
  }

  // static methods
}
export class Contract {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Contract(conn, bb.readVarint64());
  }

  async cancel(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_Cancel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async accept(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_Accept",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async decline(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_Decline",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getType(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Type",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getTitle(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Title",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getDescription(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Description",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getNotes(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Notes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getSynopsis(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Synopsis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getKeywords(): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Keywords",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async getState(): Promise<ContractState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ContractState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getFailed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Failed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getSeen(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Seen",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getRead(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Read",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCanBeCanceled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_CanBeCanceled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCanBeDeclined(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_CanBeDeclined",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCanBeFailed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_CanBeFailed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getFundsAdvance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_FundsAdvance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getFundsCompletion(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_FundsCompletion",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getFundsFailure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_FundsFailure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getReputationCompletion(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_ReputationCompletion",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getReputationFailure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_ReputationFailure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getScienceCompletion(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_ScienceCompletion",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getParameters(): Promise<ContractParameter[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Contract_get_Parameters",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return ContractParameter.decode(conn, item);
    });
  }

  // static methods
}
export class ContractManager {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ContractManager(conn, bb.readVarint64());
  }

  async getTypes(): Promise<Set<string>> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractManager_get_Types",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const set: Set<string> = new Set();
    encoding.decodeSet(conn, result.value).items.forEach((item) => {
      set.add(encoding.decodeString(conn, item));
    });
    return set;
  }

  async getAllContracts(): Promise<Contract[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractManager_get_AllContracts",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Contract.decode(conn, item);
    });
  }

  async getActiveContracts(): Promise<Contract[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractManager_get_ActiveContracts",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Contract.decode(conn, item);
    });
  }

  async getOfferedContracts(): Promise<Contract[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractManager_get_OfferedContracts",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Contract.decode(conn, item);
    });
  }

  async getCompletedContracts(): Promise<Contract[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractManager_get_CompletedContracts",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Contract.decode(conn, item);
    });
  }

  async getFailedContracts(): Promise<Contract[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractManager_get_FailedContracts",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Contract.decode(conn, item);
    });
  }

  // static methods
}
export class ContractParameter {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ContractParameter(conn, bb.readVarint64());
  }

  async getTitle(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_Title",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getNotes(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_Notes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getChildren(): Promise<ContractParameter[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_Children",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return ContractParameter.decode(conn, item);
    });
  }

  async getCompleted(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_Completed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getFailed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_Failed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getOptional(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_Optional",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getFundsCompletion(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_FundsCompletion",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getFundsFailure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_FundsFailure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getReputationCompletion(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_ReputationCompletion",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getReputationFailure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_ReputationFailure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getScienceCompletion(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ContractParameter_get_ScienceCompletion",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  // static methods
}
export class Control {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Control(conn, bb.readVarint64());
  }

  async activateNextStage(): Promise<Vessel[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_ActivateNextStage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Vessel.decode(conn, item);
    });
  }

  async getActionGroup(group: number): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeUint32(group),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_GetActionGroup",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeBool(conn, result.value);
  }

  async setActionGroup(group: number, state: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeUint32(group),
    });
    args.push({
      position: 2,
      value: encoding.encodeBool(state),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_SetActionGroup",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async toggleActionGroup(group: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeUint32(group),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_ToggleActionGroup",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async addNode(
    ut: number,
    prograde?: number,
    normal?: number,
    radial?: number
  ): Promise<Node> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(ut),
    });
    if (prograde !== undefined) {
      args.push({
        position: 2,
        value: encoding.encodeFloat(prograde),
      });
    }
    if (normal !== undefined) {
      args.push({
        position: 3,
        value: encoding.encodeFloat(normal),
      });
    }
    if (radial !== undefined) {
      args.push({
        position: 4,
        value: encoding.encodeFloat(radial),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_AddNode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Node.decode(conn, result.value);
  }

  async removeNodes(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_RemoveNodes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getState(): Promise<ControlState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ControlState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getSource(): Promise<ControlSource> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Source",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ControlSource = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getSas(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_SAS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setSas(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_SAS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSasMode(): Promise<SASMode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_SASMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: SASMode = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async setSasMode(value: SASMode): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_SASMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSpeedMode(): Promise<SpeedMode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_SpeedMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: SpeedMode = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async setSpeedMode(value: SpeedMode): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_SpeedMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRcs(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_RCS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setRcs(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_RCS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getReactionWheels(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_ReactionWheels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setReactionWheels(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_ReactionWheels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getGear(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Gear",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setGear(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Gear",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getLegs(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Legs",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setLegs(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Legs",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getWheels(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Wheels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setWheels(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Wheels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getLights(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Lights",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setLights(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Lights",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getBrakes(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Brakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setBrakes(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Brakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAntennas(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Antennas",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setAntennas(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Antennas",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getCargoBays(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_CargoBays",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setCargoBays(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_CargoBays",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getIntakes(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Intakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setIntakes(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Intakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getParachutes(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Parachutes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setParachutes(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Parachutes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRadiators(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Radiators",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setRadiators(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Radiators",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getResourceHarvesters(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_ResourceHarvesters",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setResourceHarvesters(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_ResourceHarvesters",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getResourceHarvestersActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_ResourceHarvestersActive",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setResourceHarvestersActive(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_ResourceHarvestersActive",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSolarPanels(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_SolarPanels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setSolarPanels(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_SolarPanels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAbort(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Abort",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setAbort(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Abort",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getThrottle(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Throttle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setThrottle(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Throttle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getInputMode(): Promise<ControlInputMode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_InputMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ControlInputMode = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }

  async setInputMode(value: ControlInputMode): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_InputMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPitch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Pitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setPitch(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Pitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getYaw(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Yaw",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setYaw(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Yaw",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRoll(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Roll",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setRoll(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Roll",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getForward(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Forward",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setForward(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Forward",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getUp(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Up",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setUp(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Up",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRight(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Right",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setRight(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_Right",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getWheelThrottle(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_WheelThrottle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setWheelThrottle(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_WheelThrottle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getWheelSteering(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_WheelSteering",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setWheelSteering(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_set_WheelSteering",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getCurrentStage(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_CurrentStage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getNodes(): Promise<Node[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_get_Nodes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Node.decode(conn, item);
    });
  }

  // static methods
}
export class ControlSurface {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ControlSurface(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getPitchEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_PitchEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setPitchEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_set_PitchEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getYawEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_YawEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setYawEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_set_YawEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRollEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_RollEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setRollEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_set_RollEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAuthorityLimiter(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_AuthorityLimiter",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setAuthorityLimiter(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_set_AuthorityLimiter",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getInverted(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_Inverted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setInverted(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_set_Inverted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setDeployed(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_set_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSurfaceArea(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_SurfaceArea",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getAvailableTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ControlSurface_get_AvailableTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  // static methods
}
export class CrewMember {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new CrewMember(conn, bb.readVarint64());
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async setName(value: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_set_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getType(): Promise<CrewMemberType> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_Type",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: CrewMemberType = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getOnMission(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_OnMission",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCourage(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_Courage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setCourage(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_set_Courage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getStupidity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_Stupidity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setStupidity(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_set_Stupidity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getExperience(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_Experience",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setExperience(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_set_Experience",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getBadass(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_Badass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setBadass(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_set_Badass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getVeteran(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_get_Veteran",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setVeteran(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CrewMember_set_Veteran",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
}
export class Decoupler {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Decoupler(conn, bb.readVarint64());
  }

  async decouple(): Promise<Vessel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Decoupler_Decouple",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Vessel.decode(conn, result.value);
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Decoupler_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getDecoupled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Decoupler_get_Decoupled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getStaged(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Decoupler_get_Staged",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Decoupler_get_Impulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class DockingPort {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new DockingPort(conn, bb.readVarint64());
  }

  async undock(): Promise<Vessel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_Undock",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Vessel.decode(conn, result.value);
  }

  async position(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_Position",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async direction(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_Direction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async rotation(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_Rotation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
      encoding.decodeDouble(conn, tuple[3]),
    ];
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getState(): Promise<DockingPortState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: DockingPortState = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }

  async getDockedPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_get_DockedPart",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getReengageDistance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_get_ReengageDistance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getHasShield(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_get_HasShield",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getShielded(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_get_Shielded",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setShielded(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_set_Shielded",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "DockingPort_get_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  // static methods
}
export class Engine {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Engine(conn, bb.readVarint64());
  }

  async toggleMode(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_ToggleMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setActive(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_set_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Thrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getAvailableThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_AvailableThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMaxThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_MaxThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMaxVacuumThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_MaxVacuumThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThrustLimit(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_ThrustLimit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setThrustLimit(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_set_ThrustLimit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getThrusters(): Promise<Thruster[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Thrusters",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Thruster.decode(conn, item);
    });
  }

  async getSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_SpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getVacuumSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_VacuumSpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getKerbinSeaLevelSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_KerbinSeaLevelSpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getPropellantNames(): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_PropellantNames",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async getPropellants(): Promise<Propellant[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Propellants",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Propellant.decode(conn, item);
    });
  }

  async getPropellantRatios(): Promise<Record<string, number>> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_PropellantRatios",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const dict = encoding.decodeDict(conn, result.value).entries;
    return dict.reduce((obj: Record<string, number>, item) => {
      const key = encoding.decodeString(conn, item.key);
      const value = encoding.decodeFloat(conn, item.value);
      obj[key] = value;
      return obj;
    }, {});
  }

  async getHasFuel(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_HasFuel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getThrottle(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Throttle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThrottleLocked(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_ThrottleLocked",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCanRestart(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_CanRestart",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getCanShutdown(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_CanShutdown",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getHasModes(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_HasModes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getMode(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Mode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async setMode(value: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_set_Mode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getModes(): Promise<Record<string, Engine>> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Modes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const dict = encoding.decodeDict(conn, result.value).entries;
    return dict.reduce((obj: Record<string, Engine>, item) => {
      const key = encoding.decodeString(conn, item.key);
      const value = Engine.decode(conn, item.value);
      obj[key] = value;
      return obj;
    }, {});
  }

  async getAutoModeSwitch(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_AutoModeSwitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setAutoModeSwitch(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_set_AutoModeSwitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getGimballed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_Gimballed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getGimbalRange(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_GimbalRange",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getGimbalLocked(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_GimbalLocked",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setGimbalLocked(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_set_GimbalLocked",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getGimbalLimit(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_GimbalLimit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setGimbalLimit(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_set_GimbalLimit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAvailableTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Engine_get_AvailableTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  // static methods
}
export class Experiment {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Experiment(conn, bb.readVarint64());
  }

  async run(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_Run",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async transmit(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_Transmit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async dump(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_Dump",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async reset(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_Reset",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getInoperable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_Inoperable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getRerunnable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_Rerunnable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getHasData(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_HasData",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getData(): Promise<ScienceData[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_Data",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return ScienceData.decode(conn, item);
    });
  }

  async getAvailable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_Available",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getBiome(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_Biome",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getScienceSubject(): Promise<ScienceSubject> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Experiment_get_ScienceSubject",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ScienceSubject.decode(conn, result.value);
  }

  // static methods
}
export class Fairing {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Fairing(conn, bb.readVarint64());
  }

  async jettison(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Fairing_Jettison",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Fairing_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getJettisoned(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Fairing_get_Jettisoned",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  // static methods
}
export class Flight {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Flight(conn, bb.readVarint64());
  }

  async simulateAerodynamicForceAt(
    body: CelestialBody,
    position: [number, number, number],
    velocity: [number, number, number]
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(body.id),
    });
    args.push({
      position: 2,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 3,
      value: encoding.encodeTuple(velocity),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_SimulateAerodynamicForceAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getGForce(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_GForce",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMeanAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_MeanAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getSurfaceAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_SurfaceAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getBedrockAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_BedrockAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getElevation(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Elevation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getLatitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Latitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getLongitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Longitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getVelocity(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Velocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Speed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getHorizontalSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_HorizontalSpeed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getVerticalSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_VerticalSpeed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getCenterOfMass(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_CenterOfMass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getRotation(): Promise<[number, number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Rotation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
      encoding.decodeDouble(conn, tuple[3]),
    ];
  }

  async getDirection(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Direction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getPitch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Pitch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getHeading(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Heading",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getRoll(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Roll",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getPrograde(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Prograde",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getRetrograde(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Retrograde",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getNormal(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Normal",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getAntiNormal(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_AntiNormal",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getRadial(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Radial",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getAntiRadial(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_AntiRadial",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getAtmosphereDensity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_AtmosphereDensity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getDynamicPressure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_DynamicPressure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getStaticPressureAtMsl(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_StaticPressureAtMSL",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getStaticPressure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_StaticPressure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getAerodynamicForce(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_AerodynamicForce",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getLift(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Lift",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getDrag(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Drag",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getSpeedOfSound(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_SpeedOfSound",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMach(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_Mach",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getReynoldsNumber(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_ReynoldsNumber",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getTrueAirSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_TrueAirSpeed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getEquivalentAirSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_EquivalentAirSpeed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getTerminalVelocity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_TerminalVelocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getAngleOfAttack(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_AngleOfAttack",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSideslipAngle(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_SideslipAngle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getTotalAirTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_TotalAirTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getStaticAirTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_StaticAirTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getStallFraction(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_StallFraction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getDragCoefficient(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_DragCoefficient",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getLiftCoefficient(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_LiftCoefficient",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getBallisticCoefficient(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_BallisticCoefficient",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThrustSpecificFuelConsumption(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_ThrustSpecificFuelConsumption",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class Force {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Force(conn, bb.readVarint64());
  }

  async remove(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_Remove",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getForceVector(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_get_ForceVector",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setForceVector(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_set_ForceVector",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPosition(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_get_Position",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setPosition(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_set_Position",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_get_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async setReferenceFrame(value: ReferenceFrame): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Force_set_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
}
export class Intake {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Intake(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Intake_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getOpen(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Intake_get_Open",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setOpen(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Intake_set_Open",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Intake_get_Speed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getFlow(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Intake_get_Flow",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getArea(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Intake_get_Area",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class LaunchClamp {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new LaunchClamp(conn, bb.readVarint64());
  }

  async release(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchClamp_Release",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchClamp_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  // static methods
}
export class Leg {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Leg(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Leg_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getState(): Promise<LegState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Leg_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: LegState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getDeployable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Leg_get_Deployable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Leg_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setDeployed(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Leg_set_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getIsGrounded(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Leg_get_IsGrounded",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  // static methods
}
export class Light {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Light(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Light_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Light_get_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setActive(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Light_set_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getColor(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Light_get_Color",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeFloat(conn, tuple[0]),
      encoding.decodeFloat(conn, tuple[1]),
      encoding.decodeFloat(conn, tuple[2]),
    ];
  }

  async setColor(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Light_set_Color",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPowerUsage(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Light_get_PowerUsage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class Module {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Module(conn, bb.readVarint64());
  }

  async hasField(name: string): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_HasField",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeBool(conn, result.value);
  }

  async getField(name: string): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_GetField",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeString(conn, result.value);
  }

  async setFieldInt(name: string, value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    args.push({
      position: 2,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_SetFieldInt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async setFieldFloat(name: string, value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    args.push({
      position: 2,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_SetFieldFloat",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async setFieldString(name: string, value: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    args.push({
      position: 2,
      value: encoding.encodeString(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_SetFieldString",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async resetField(name: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_ResetField",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async hasEvent(name: string): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_HasEvent",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeBool(conn, result.value);
  }

  async triggerEvent(name: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_TriggerEvent",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async hasAction(name: string): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_HasAction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeBool(conn, result.value);
  }

  async setAction(name: string, value?: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    if (value !== undefined) {
      args.push({
        position: 2,
        value: encoding.encodeBool(value),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_SetAction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getFields(): Promise<Record<string, string>> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_get_Fields",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const dict = encoding.decodeDict(conn, result.value).entries;
    return dict.reduce((obj: Record<string, string>, item) => {
      const key = encoding.decodeString(conn, item.key);
      const value = encoding.decodeString(conn, item.value);
      obj[key] = value;
      return obj;
    }, {});
  }

  async getEvents(): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_get_Events",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async getActions(): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Module_get_Actions",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  // static methods
}
export class Node {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Node(conn, bb.readVarint64());
  }

  async burnVector(
    referenceFrame?: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    if (referenceFrame !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_BurnVector",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async remainingBurnVector(
    referenceFrame?: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    if (referenceFrame !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_RemainingBurnVector",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async remove(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_Remove",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async position(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_Position",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async direction(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_Direction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getPrograde(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_Prograde",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setPrograde(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_set_Prograde",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getNormal(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_Normal",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setNormal(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_set_Normal",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRadial(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_Radial",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setRadial(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_set_Radial",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getDeltaV(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_DeltaV",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setDeltaV(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_set_DeltaV",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRemainingDeltaV(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_RemainingDeltaV",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getUt(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_UT",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setUt(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_set_UT",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTimeTo(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_TimeTo",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getOrbit(): Promise<Orbit> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_Orbit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Orbit.decode(conn, result.value);
  }

  async getReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getOrbitalReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Node_get_OrbitalReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  // static methods
}
export class Orbit {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Orbit(conn, bb.readVarint64());
  }

  async meanAnomalyAtUt(ut: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(ut),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_MeanAnomalyAtUT",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async radiusAtTrueAnomaly(trueAnomaly: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(trueAnomaly),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_RadiusAtTrueAnomaly",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async trueAnomalyAtRadius(radius: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(radius),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_TrueAnomalyAtRadius",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async trueAnomalyAtUt(ut: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(ut),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_TrueAnomalyAtUT",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async utAtTrueAnomaly(trueAnomaly: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(trueAnomaly),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_UTAtTrueAnomaly",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async eccentricAnomalyAtUt(ut: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(ut),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_EccentricAnomalyAtUT",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async orbitalSpeedAt(time: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(time),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_OrbitalSpeedAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async radiusAt(ut: number): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(ut),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_RadiusAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async positionAt(
    ut: number,
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(ut),
    });
    args.push({
      position: 2,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_PositionAt",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async timeOfClosestApproach(target: Orbit): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(target.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_TimeOfClosestApproach",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async distanceAtClosestApproach(target: Orbit): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(target.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_DistanceAtClosestApproach",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async listClosestApproaches(
    target: Orbit,
    orbits: number
  ): Promise<number[][]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(target.id),
    });
    args.push({
      position: 2,
      value: encoding.encodeSint32(orbits),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_ListClosestApproaches",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return list.map((item) => {
        return encoding.decodeDouble(conn, item);
      });
    });
  }

  async trueAnomalyAtAn(target: Orbit): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(target.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_TrueAnomalyAtAN",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async trueAnomalyAtDn(target: Orbit): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(target.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_TrueAnomalyAtDN",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async relativeInclination(target: Orbit): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(target.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_RelativeInclination",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeDouble(conn, result.value);
  }

  async getBody(): Promise<CelestialBody> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Body",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return CelestialBody.decode(conn, result.value);
  }

  async getApoapsis(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Apoapsis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getPeriapsis(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Periapsis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getApoapsisAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_ApoapsisAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getPeriapsisAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_PeriapsisAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getSemiMajorAxis(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_SemiMajorAxis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getSemiMinorAxis(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_SemiMinorAxis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getRadius(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Radius",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Speed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getPeriod(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Period",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getTimeToApoapsis(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_TimeToApoapsis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getTimeToPeriapsis(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_TimeToPeriapsis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getEccentricity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Eccentricity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getInclination(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Inclination",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getLongitudeOfAscendingNode(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_LongitudeOfAscendingNode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getArgumentOfPeriapsis(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_ArgumentOfPeriapsis",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getMeanAnomalyAtEpoch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_MeanAnomalyAtEpoch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getEpoch(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_Epoch",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getMeanAnomaly(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_MeanAnomaly",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getEccentricAnomaly(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_EccentricAnomaly",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getTrueAnomaly(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_TrueAnomaly",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getNextOrbit(): Promise<Orbit> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_NextOrbit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Orbit.decode(conn, result.value);
  }

  async getTimeToSoiChange(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_TimeToSOIChange",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getOrbitalSpeed(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_get_OrbitalSpeed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  // static methods
  static async referencePlaneNormal(
    conn: KRPCConnection,
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_static_ReferencePlaneNormal",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  static async referencePlaneDirection(
    conn: KRPCConnection,
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Orbit_static_ReferencePlaneDirection",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }
}
export class Parachute {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Parachute(conn, bb.readVarint64());
  }

  async deploy(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_Deploy",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async arm(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_Arm",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getArmed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_get_Armed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getState(): Promise<ParachuteState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ParachuteState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getDeployAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_get_DeployAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setDeployAltitude(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_set_DeployAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getDeployMinPressure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_get_DeployMinPressure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setDeployMinPressure(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parachute_set_DeployMinPressure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
}
export class Part {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Part(conn, bb.readVarint64());
  }

  async position(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_Position",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async centerOfMass(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_CenterOfMass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async boundingBox(
    referenceFrame: ReferenceFrame
  ): Promise<[[number, number, number], [number, number, number]]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_BoundingBox",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async direction(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_Direction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async velocity(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_Velocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async rotation(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_Rotation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
      encoding.decodeDouble(conn, tuple[3]),
    ];
  }

  async addForce(
    force: [number, number, number],
    position: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<Force> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(force),
    });
    args.push({
      position: 2,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 3,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_AddForce",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Force.decode(conn, result.value);
  }

  async instantaneousForce(
    force: [number, number, number],
    position: [number, number, number],
    referenceFrame: ReferenceFrame
  ): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(force),
    });
    args.push({
      position: 2,
      value: encoding.encodeTuple(position),
    });
    args.push({
      position: 3,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_InstantaneousForce",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getTitle(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Title",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getTag(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Tag",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async setTag(value: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_set_Tag",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getHighlighted(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Highlighted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setHighlighted(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_set_Highlighted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getHighlightColor(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_HighlightColor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async setHighlightColor(value: [number, number, number]): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeTuple(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_set_HighlightColor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getCost(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Cost",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getVessel(): Promise<Vessel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Vessel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Vessel.decode(conn, result.value);
  }

  async getParent(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Parent",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getChildren(): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Children",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async getAxiallyAttached(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_AxiallyAttached",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getRadiallyAttached(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_RadiallyAttached",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getStage(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Stage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getDecoupleStage(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_DecoupleStage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getMassless(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Massless",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Mass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getDryMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_DryMass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getShielded(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Shielded",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDynamicPressure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_DynamicPressure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getImpactTolerance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ImpactTolerance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Temperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getSkinTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_SkinTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getMaxTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_MaxTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getMaxSkinTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_MaxSkinTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getThermalMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalMass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalSkinMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalSkinMass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalResourceMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalResourceMass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalInternalFlux(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalInternalFlux",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalConductionFlux(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalConductionFlux",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalConvectionFlux(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalConvectionFlux",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalRadiationFlux(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalRadiationFlux",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalSkinToInternalFlux(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ThermalSkinToInternalFlux",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getResources(): Promise<Resources> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Resources",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Resources.decode(conn, result.value);
  }

  async getCrossfeed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Crossfeed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getIsFuelLine(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_IsFuelLine",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getFuelLinesFrom(): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_FuelLinesFrom",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async getFuelLinesTo(): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_FuelLinesTo",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async getModules(): Promise<Module[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Modules",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Module.decode(conn, item);
    });
  }

  async getAntenna(): Promise<Antenna> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Antenna",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Antenna.decode(conn, result.value);
  }

  async getCargoBay(): Promise<CargoBay> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_CargoBay",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return CargoBay.decode(conn, result.value);
  }

  async getControlSurface(): Promise<ControlSurface> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ControlSurface",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ControlSurface.decode(conn, result.value);
  }

  async getDecoupler(): Promise<Decoupler> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Decoupler",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Decoupler.decode(conn, result.value);
  }

  async getDockingPort(): Promise<DockingPort> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_DockingPort",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return DockingPort.decode(conn, result.value);
  }

  async getEngine(): Promise<Engine> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Engine",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Engine.decode(conn, result.value);
  }

  async getExperiment(): Promise<Experiment> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Experiment",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Experiment.decode(conn, result.value);
  }

  async getFairing(): Promise<Fairing> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Fairing",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Fairing.decode(conn, result.value);
  }

  async getIntake(): Promise<Intake> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Intake",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Intake.decode(conn, result.value);
  }

  async getLeg(): Promise<Leg> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Leg",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Leg.decode(conn, result.value);
  }

  async getLaunchClamp(): Promise<LaunchClamp> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_LaunchClamp",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return LaunchClamp.decode(conn, result.value);
  }

  async getLight(): Promise<Light> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Light",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Light.decode(conn, result.value);
  }

  async getParachute(): Promise<Parachute> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Parachute",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Parachute.decode(conn, result.value);
  }

  async getRadiator(): Promise<Radiator> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Radiator",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Radiator.decode(conn, result.value);
  }

  async getRcs(): Promise<RCS> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_RCS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return RCS.decode(conn, result.value);
  }

  async getReactionWheel(): Promise<ReactionWheel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ReactionWheel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReactionWheel.decode(conn, result.value);
  }

  async getResourceConverter(): Promise<ResourceConverter> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ResourceConverter",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ResourceConverter.decode(conn, result.value);
  }

  async getResourceHarvester(): Promise<ResourceHarvester> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ResourceHarvester",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ResourceHarvester.decode(conn, result.value);
  }

  async getSensor(): Promise<Sensor> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Sensor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Sensor.decode(conn, result.value);
  }

  async getSolarPanel(): Promise<SolarPanel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_SolarPanel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return SolarPanel.decode(conn, result.value);
  }

  async getWheel(): Promise<Wheel> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_Wheel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Wheel.decode(conn, result.value);
  }

  async getMomentOfInertia(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_MomentOfInertia",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getInertiaTensor(): Promise<number[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_InertiaTensor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeDouble(conn, item);
    });
  }

  async getReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getCenterOfMassReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Part_get_CenterOfMassReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  // static methods
}
export class Parts {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Parts(conn, bb.readVarint64());
  }

  async withName(name: string): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_WithName",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async withTitle(title: string): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(title),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_WithTitle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async withTag(tag: string): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(tag),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_WithTag",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async withModule(moduleName: string): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(moduleName),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_WithModule",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async inStage(stage: number): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(stage),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_InStage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async inDecoupleStage(stage: number): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(stage),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_InDecoupleStage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async modulesWithName(moduleName: string): Promise<Module[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(moduleName),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_ModulesWithName",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Module.decode(conn, item);
    });
  }

  async getAll(): Promise<Part[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_All",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Part.decode(conn, item);
    });
  }

  async getRoot(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Root",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getControlling(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Controlling",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async setControlling(value: Part): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_set_Controlling",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAntennas(): Promise<Antenna[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Antennas",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Antenna.decode(conn, item);
    });
  }

  async getControlSurfaces(): Promise<ControlSurface[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_ControlSurfaces",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return ControlSurface.decode(conn, item);
    });
  }

  async getCargoBays(): Promise<CargoBay[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_CargoBays",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return CargoBay.decode(conn, item);
    });
  }

  async getDecouplers(): Promise<Decoupler[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Decouplers",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Decoupler.decode(conn, item);
    });
  }

  async getDockingPorts(): Promise<DockingPort[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_DockingPorts",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return DockingPort.decode(conn, item);
    });
  }

  async getEngines(): Promise<Engine[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Engines",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Engine.decode(conn, item);
    });
  }

  async getExperiments(): Promise<Experiment[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Experiments",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Experiment.decode(conn, item);
    });
  }

  async getFairings(): Promise<Fairing[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Fairings",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Fairing.decode(conn, item);
    });
  }

  async getIntakes(): Promise<Intake[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Intakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Intake.decode(conn, item);
    });
  }

  async getLegs(): Promise<Leg[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Legs",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Leg.decode(conn, item);
    });
  }

  async getLaunchClamps(): Promise<LaunchClamp[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_LaunchClamps",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return LaunchClamp.decode(conn, item);
    });
  }

  async getLights(): Promise<Light[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Lights",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Light.decode(conn, item);
    });
  }

  async getParachutes(): Promise<Parachute[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Parachutes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Parachute.decode(conn, item);
    });
  }

  async getRadiators(): Promise<Radiator[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Radiators",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Radiator.decode(conn, item);
    });
  }

  async getRcs(): Promise<RCS[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_RCS",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return RCS.decode(conn, item);
    });
  }

  async getReactionWheels(): Promise<ReactionWheel[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_ReactionWheels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return ReactionWheel.decode(conn, item);
    });
  }

  async getResourceConverters(): Promise<ResourceConverter[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_ResourceConverters",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return ResourceConverter.decode(conn, item);
    });
  }

  async getResourceHarvesters(): Promise<ResourceHarvester[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_ResourceHarvesters",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return ResourceHarvester.decode(conn, item);
    });
  }

  async getSensors(): Promise<Sensor[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Sensors",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Sensor.decode(conn, item);
    });
  }

  async getSolarPanels(): Promise<SolarPanel[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_SolarPanels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return SolarPanel.decode(conn, item);
    });
  }

  async getWheels(): Promise<Wheel[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Parts_get_Wheels",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Wheel.decode(conn, item);
    });
  }

  // static methods
}
export class Propellant {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Propellant(conn, bb.readVarint64());
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getCurrentAmount(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_CurrentAmount",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getCurrentRequirement(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_CurrentRequirement",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getTotalResourceAvailable(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_TotalResourceAvailable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getTotalResourceCapacity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_TotalResourceCapacity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getIgnoreForIsp(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_IgnoreForIsp",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getIgnoreForThrustCurve(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_IgnoreForThrustCurve",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDrawStackGauge(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_DrawStackGauge",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getIsDeprived(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_IsDeprived",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getRatio(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Propellant_get_Ratio",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class RCS {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new RCS(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_Enabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_set_Enabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPitchEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_PitchEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setPitchEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_set_PitchEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getYawEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_YawEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setYawEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_set_YawEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRollEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_RollEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setRollEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_set_RollEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getForwardEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_ForwardEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setForwardEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_set_ForwardEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getUpEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_UpEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setUpEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_set_UpEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getRightEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_RightEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setRightEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_set_RightEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAvailableTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_AvailableTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getMaxThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_MaxThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMaxVacuumThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_MaxVacuumThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThrusters(): Promise<Thruster[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_Thrusters",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Thruster.decode(conn, item);
    });
  }

  async getSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_SpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getVacuumSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_VacuumSpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getKerbinSeaLevelSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_KerbinSeaLevelSpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getPropellants(): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_Propellants",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async getPropellantRatios(): Promise<Record<string, number>> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_PropellantRatios",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const dict = encoding.decodeDict(conn, result.value).entries;
    return dict.reduce((obj: Record<string, number>, item) => {
      const key = encoding.decodeString(conn, item.key);
      const value = encoding.decodeFloat(conn, item.value);
      obj[key] = value;
      return obj;
    }, {});
  }

  async getHasFuel(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RCS_get_HasFuel",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  // static methods
}
export class Radiator {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Radiator(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Radiator_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getDeployable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Radiator_get_Deployable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Radiator_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setDeployed(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Radiator_set_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getState(): Promise<RadiatorState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Radiator_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: RadiatorState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  // static methods
}
export class ReactionWheel {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ReactionWheel(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReactionWheel_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReactionWheel_get_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setActive(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReactionWheel_set_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getBroken(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReactionWheel_get_Broken",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getAvailableTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReactionWheel_get_AvailableTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getMaxTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReactionWheel_get_MaxTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  // static methods
}
export class ReferenceFrame {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ReferenceFrame(conn, bb.readVarint64());
  }

  // static methods
  static async createRelative(
    conn: KRPCConnection,
    referenceFrame: ReferenceFrame,
    position?: [number, number, number],
    rotation?: [number, number, number, number],
    velocity?: [number, number, number],
    angularVelocity?: [number, number, number]
  ): Promise<ReferenceFrame> {
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    if (position !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeTuple(position),
      });
    }
    if (rotation !== undefined) {
      args.push({
        position: 2,
        value: encoding.encodeTuple(rotation),
      });
    }
    if (velocity !== undefined) {
      args.push({
        position: 3,
        value: encoding.encodeTuple(velocity),
      });
    }
    if (angularVelocity !== undefined) {
      args.push({
        position: 4,
        value: encoding.encodeTuple(angularVelocity),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReferenceFrame_static_CreateRelative",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  static async createHybrid(
    conn: KRPCConnection,
    position: ReferenceFrame,
    rotation?: ReferenceFrame,
    velocity?: ReferenceFrame,
    angularVelocity?: ReferenceFrame
  ): Promise<ReferenceFrame> {
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(position.id),
    });
    if (rotation !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeVarint64(rotation.id),
      });
    }
    if (velocity !== undefined) {
      args.push({
        position: 2,
        value: encoding.encodeVarint64(velocity.id),
      });
    }
    if (angularVelocity !== undefined) {
      args.push({
        position: 3,
        value: encoding.encodeVarint64(angularVelocity.id),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ReferenceFrame_static_CreateHybrid",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }
}
export class Resource {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Resource(conn, bb.readVarint64());
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getMax(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_get_Max",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getAmount(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_get_Amount",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getDensity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_get_Density",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getFlowMode(): Promise<ResourceFlowMode> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_get_FlowMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ResourceFlowMode = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }

  async getEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_get_Enabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resource_set_Enabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
}
export class ResourceConverter {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ResourceConverter(conn, bb.readVarint64());
  }

  async active(index: number): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeBool(conn, result.value);
  }

  async name(index: number): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeString(conn, result.value);
  }

  async start(index: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_Start",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async stop(index: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_Stop",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async state(index: number): Promise<ResourceConverterState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ResourceConverterState = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }

  async statusInfo(index: number): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_StatusInfo",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeString(conn, result.value);
  }

  async inputs(index: number): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_Inputs",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async outputs(index: number): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(index),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_Outputs",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getCount(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_get_Count",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getThermalEfficiency(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_get_ThermalEfficiency",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getCoreTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_get_CoreTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getOptimumCoreTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceConverter_get_OptimumCoreTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class ResourceHarvester {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ResourceHarvester(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getState(): Promise<ResourceHarvesterState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ResourceHarvesterState = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setDeployed(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_set_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setActive(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_set_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getExtractionRate(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_ExtractionRate",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThermalEfficiency(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_ThermalEfficiency",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getCoreTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_CoreTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getOptimumCoreTemperature(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceHarvester_get_OptimumCoreTemperature",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class ResourceTransfer {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ResourceTransfer(conn, bb.readVarint64());
  }

  async getComplete(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceTransfer_get_Complete",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getAmount(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceTransfer_get_Amount",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
  static async start(
    conn: KRPCConnection,
    fromPart: Part,
    toPart: Part,
    resource: string,
    maxAmount: number
  ): Promise<ResourceTransfer> {
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(fromPart.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(toPart.id),
    });
    args.push({
      position: 2,
      value: encoding.encodeString(resource),
    });
    args.push({
      position: 3,
      value: encoding.encodeFloat(maxAmount),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ResourceTransfer_static_Start",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ResourceTransfer.decode(conn, result.value);
  }
}
export class Resources {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Resources(conn, bb.readVarint64());
  }

  async withResource(name: string): Promise<Resource[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_WithResource",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Resource.decode(conn, item);
    });
  }

  async hasResource(name: string): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_HasResource",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeBool(conn, result.value);
  }

  async max(name: string): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_Max",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeFloat(conn, result.value);
  }

  async amount(name: string): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_Amount",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return encoding.decodeFloat(conn, result.value);
  }

  async getAll(): Promise<Resource[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_get_All",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Resource.decode(conn, item);
    });
  }

  async getNames(): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_get_Names",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async getEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_get_Enabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_set_Enabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  // static methods
  static async density(conn: KRPCConnection, name: string): Promise<number> {
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_static_Density",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  static async flowMode(
    conn: KRPCConnection,
    name: string
  ): Promise<ResourceFlowMode> {
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Resources_static_FlowMode",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: ResourceFlowMode = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }
}
export class ScienceData {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ScienceData(conn, bb.readVarint64());
  }

  async getDataAmount(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceData_get_DataAmount",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getScienceValue(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceData_get_ScienceValue",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getTransmitValue(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceData_get_TransmitValue",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class ScienceSubject {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new ScienceSubject(conn, bb.readVarint64());
  }

  async getScience(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceSubject_get_Science",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getScienceCap(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceSubject_get_ScienceCap",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getIsComplete(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceSubject_get_IsComplete",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDataScale(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceSubject_get_DataScale",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getScientificValue(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceSubject_get_ScientificValue",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSubjectValue(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceSubject_get_SubjectValue",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getTitle(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ScienceSubject_get_Title",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  // static methods
}
export class Sensor {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Sensor(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Sensor_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getActive(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Sensor_get_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setActive(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Sensor_set_Active",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getValue(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Sensor_get_Value",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  // static methods
}
export class SolarPanel {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new SolarPanel(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "SolarPanel_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getDeployable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "SolarPanel_get_Deployable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "SolarPanel_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setDeployed(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "SolarPanel_set_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getState(): Promise<SolarPanelState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "SolarPanel_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: SolarPanelState = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }

  async getEnergyFlow(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "SolarPanel_get_EnergyFlow",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSunExposure(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "SolarPanel_get_SunExposure",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
export class Thruster {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Thruster(conn, bb.readVarint64());
  }

  async thrustPosition(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_ThrustPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async thrustDirection(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_ThrustDirection",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async initialThrustPosition(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_InitialThrustPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async initialThrustDirection(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_InitialThrustDirection",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async gimbalPosition(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_GimbalPosition",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getThrustReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_get_ThrustReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getGimballed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_get_Gimballed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getGimbalAngle(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Thruster_get_GimbalAngle",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  // static methods
}
export class Vessel {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Vessel(conn, bb.readVarint64());
  }

  async recover(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_Recover",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async flight(referenceFrame?: ReferenceFrame): Promise<Flight> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    if (referenceFrame !== undefined) {
      args.push({
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_Flight",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Flight.decode(conn, result.value);
  }

  async resourcesInDecoupleStage(
    stage: number,
    cumulative?: boolean
  ): Promise<Resources> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(stage),
    });
    if (cumulative !== undefined) {
      args.push({
        position: 2,
        value: encoding.encodeBool(cumulative),
      });
    }
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_ResourcesInDecoupleStage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Resources.decode(conn, result.value);
  }

  async position(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_Position",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async boundingBox(
    referenceFrame: ReferenceFrame
  ): Promise<[[number, number, number], [number, number, number]]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_BoundingBox",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async velocity(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_Velocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async rotation(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_Rotation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
      encoding.decodeDouble(conn, tuple[3]),
    ];
  }

  async direction(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_Direction",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async angularVelocity(
    referenceFrame: ReferenceFrame
  ): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(referenceFrame.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_AngularVelocity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async setName(value: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_set_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getType(): Promise<VesselType> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Type",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: VesselType = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async setType(value: VesselType): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_set_Type",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSituation(): Promise<VesselSituation> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Situation",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: VesselSituation = encoding.decodeSint32(
      conn,
      result.value
    );
    return enumValue;
  }

  async getRecoverable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Recoverable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getMet(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_MET",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async getBiome(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Biome",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async getOrbit(): Promise<Orbit> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Orbit",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Orbit.decode(conn, result.value);
  }

  async getControl(): Promise<Control> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Control",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Control.decode(conn, result.value);
  }

  async getComms(): Promise<Comms> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Comms",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Comms.decode(conn, result.value);
  }

  async getAutoPilot(): Promise<AutoPilot> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AutoPilot",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return AutoPilot.decode(conn, result.value);
  }

  async getCrewCapacity(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_CrewCapacity",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getCrewCount(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_CrewCount",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getCrew(): Promise<CrewMember[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Crew",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return CrewMember.decode(conn, item);
    });
  }

  async getResources(): Promise<Resources> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Resources",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Resources.decode(conn, result.value);
  }

  async getParts(): Promise<Parts> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Parts",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Parts.decode(conn, result.value);
  }

  async getMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Mass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getDryMass(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_DryMass",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Thrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getAvailableThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AvailableThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMaxThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_MaxThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMaxVacuumThrust(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_MaxVacuumThrust",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_SpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getVacuumSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_VacuumSpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getKerbinSeaLevelSpecificImpulse(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_KerbinSeaLevelSpecificImpulse",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getMomentOfInertia(): Promise<[number, number, number]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_MomentOfInertia",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      encoding.decodeDouble(conn, tuple[0]),
      encoding.decodeDouble(conn, tuple[1]),
      encoding.decodeDouble(conn, tuple[2]),
    ];
  }

  async getInertiaTensor(): Promise<number[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_InertiaTensor",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeDouble(conn, item);
    });
  }

  async getAvailableTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AvailableTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getAvailableReactionWheelTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AvailableReactionWheelTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getAvailableRcsTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AvailableRCSTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getAvailableEngineTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AvailableEngineTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getAvailableControlSurfaceTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AvailableControlSurfaceTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getAvailableOtherTorque(): Promise<
    [[number, number, number], [number, number, number]]
  > {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AvailableOtherTorque",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const tuple = encoding.decodeTuple(conn, result.value).items;
    return [
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
      [
        encoding.decodeDouble(conn, tuple[0]),
        encoding.decodeDouble(conn, tuple[1]),
        encoding.decodeDouble(conn, tuple[2]),
      ],
    ];
  }

  async getReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_ReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getOrbitalReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_OrbitalReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getSurfaceReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_SurfaceReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  async getSurfaceVelocityReferenceFrame(): Promise<ReferenceFrame> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_SurfaceVelocityReferenceFrame",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return ReferenceFrame.decode(conn, result.value);
  }

  // static methods
}
export class Waypoint {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Waypoint(conn, bb.readVarint64());
  }

  async remove(): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_Remove",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return undefined;
  }

  async getBody(): Promise<CelestialBody> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Body",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return CelestialBody.decode(conn, result.value);
  }

  async setBody(value: CelestialBody): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeVarint64(value.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_Body",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getName(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async setName(value: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_Name",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getColor(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Color",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async setColor(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeSint32(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_Color",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getIcon(): Promise<string> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Icon",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeString(conn, result.value);
  }

  async setIcon(value: string): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeString(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_Icon",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getLatitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Latitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setLatitude(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_Latitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getLongitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Longitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setLongitude(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_Longitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getMeanAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_MeanAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setMeanAltitude(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_MeanAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSurfaceAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_SurfaceAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setSurfaceAltitude(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_SurfaceAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getBedrockAltitude(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_BedrockAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeDouble(conn, result.value);
  }

  async setBedrockAltitude(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_set_BedrockAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getNearSurface(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_NearSurface",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getGrounded(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Grounded",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getIndex(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Index",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeSint32(conn, result.value);
  }

  async getClustered(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Clustered",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getHasContract(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_HasContract",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getContract(): Promise<Contract> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Waypoint_get_Contract",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Contract.decode(conn, result.value);
  }

  // static methods
}
export class WaypointManager {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new WaypointManager(conn, bb.readVarint64());
  }

  async addWaypoint(
    latitude: number,
    longitude: number,
    body: CelestialBody,
    name: string
  ): Promise<Waypoint> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    args.push({
      position: 3,
      value: encoding.encodeVarint64(body.id),
    });
    args.push({
      position: 4,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "WaypointManager_AddWaypoint",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Waypoint.decode(conn, result.value);
  }

  async addWaypointAtAltitude(
    latitude: number,
    longitude: number,
    altitude: number,
    body: CelestialBody,
    name: string
  ): Promise<Waypoint> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeDouble(latitude),
    });
    args.push({
      position: 2,
      value: encoding.encodeDouble(longitude),
    });
    args.push({
      position: 3,
      value: encoding.encodeDouble(altitude),
    });
    args.push({
      position: 4,
      value: encoding.encodeVarint64(body.id),
    });
    args.push({
      position: 5,
      value: encoding.encodeString(name),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "WaypointManager_AddWaypointAtAltitude",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    return Waypoint.decode(conn, result.value);
  }

  async getWaypoints(): Promise<Waypoint[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "WaypointManager_get_Waypoints",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return Waypoint.decode(conn, item);
    });
  }

  async getIcons(): Promise<string[]> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "WaypointManager_get_Icons",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = encoding.decodeList(conn, result.value).items;
    return list.map((item) => {
      return encoding.decodeString(conn, item);
    });
  }

  async getColors(): Promise<Record<string, number>> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "WaypointManager_get_Colors",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const dict = encoding.decodeDict(conn, result.value).entries;
    return dict.reduce((obj: Record<string, number>, item) => {
      const key = encoding.decodeString(conn, item.key);
      const value = encoding.decodeSint32(conn, item.value);
      obj[key] = value;
      return obj;
    }, {});
  }

  // static methods
}
export class Wheel {
  conn: KRPCConnection;
  id: Long;

  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  static decode(conn: KRPCConnection, result: Uint8Array) {
    const bb = ByteBuffer.wrap(result);
    return new Wheel(conn, bb.readVarint64());
  }

  async getPart(): Promise<Part> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Part",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return Part.decode(conn, result.value);
  }

  async getState(): Promise<WheelState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_State",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: WheelState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getRadius(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Radius",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getGrounded(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Grounded",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getHasBrakes(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_HasBrakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getBrakes(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Brakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setBrakes(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_Brakes",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getAutoFrictionControl(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_AutoFrictionControl",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setAutoFrictionControl(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_AutoFrictionControl",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getManualFrictionControl(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_ManualFrictionControl",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setManualFrictionControl(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_ManualFrictionControl",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getDeployable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Deployable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getDeployed(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setDeployed(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_Deployed",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getPowered(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Powered",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getMotorEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_MotorEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setMotorEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_MotorEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getMotorInverted(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_MotorInverted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setMotorInverted(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_MotorInverted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getMotorState(): Promise<MotorState> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_MotorState",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const enumValue: MotorState = encoding.decodeSint32(conn, result.value);
    return enumValue;
  }

  async getMotorOutput(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_MotorOutput",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getTractionControlEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_TractionControlEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setTractionControlEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_TractionControlEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getTractionControl(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_TractionControl",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setTractionControl(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_TractionControl",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getDriveLimiter(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_DriveLimiter",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async setDriveLimiter(value: number): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeFloat(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_DriveLimiter",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSteerable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Steerable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getSteeringEnabled(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_SteeringEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setSteeringEnabled(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_SteeringEnabled",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getSteeringInverted(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_SteeringInverted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async setSteeringInverted(value: boolean): Promise<void> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    args.push({
      position: 1,
      value: encoding.encodeBool(value),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_set_SteeringInverted",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return undefined;
  }

  async getHasSuspension(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_HasSuspension",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getSuspensionSpringStrength(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_SuspensionSpringStrength",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSuspensionDamperStrength(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_SuspensionDamperStrength",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getBroken(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Broken",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getRepairable(): Promise<boolean> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Repairable",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeBool(conn, result.value);
  }

  async getStress(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Stress",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getStressTolerance(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_StressTolerance",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getStressPercentage(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_StressPercentage",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getDeflection(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Deflection",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  async getSlip(): Promise<number> {
    const conn = this.conn;
    const args: krpc.Argument[] = [];
    args.push({
      position: 0,
      value: encoding.encodeVarint64(this.id),
    });
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Wheel_get_Slip",
      arguments: args,
    });
    // eslint-disable-next-line no-unused-vars
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );

    return encoding.decodeFloat(conn, result.value);
  }

  // static methods
}
