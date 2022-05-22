// Generated file DO NOT EDIT
import Long from "long";
import { KRPCConnection } from "../../services/connection";
import * as krpc from "../proto/krpc";
import * as encoding from "../../services/encoding";
import ByteBuffer from "bytebuffer";
ByteBuffer.DEFAULT_ENDIAN = true;

export class SpaceCenter {
  private conn: KRPCConnection;
  constructor(conn: KRPCConnection) {
    this.conn = conn;
  }

  async clearTarget(): Promise<void> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "ClearTarget",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async launchableVessels(craftDirectory: string): Promise<string[]> {
    const args = [
      {
        position: 0,
        value: encoding.encodeString(craftDirectory),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchableVessels",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    const list = encoding.decodeList(this.conn, result.value).items;
    return list.map((item) => { return encoding.decodeString(this.conn, item)});
  }

  async launchVessel(craftDirectory: string, name: string, launchSite: string, recover: boolean): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeString(craftDirectory),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
      {
        position: 2,
        value: encoding.encodeString(launchSite),
      },
      {
        position: 3,
        value: encoding.encodeBool(recover),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchVessel",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async launchVesselFromVab(name: string, recover: boolean): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeString(name),
      },
      {
        position: 1,
        value: encoding.encodeBool(recover),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchVesselFromVAB",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async launchVesselFromSph(name: string, recover: boolean): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeString(name),
      },
      {
        position: 1,
        value: encoding.encodeBool(recover),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "LaunchVesselFromSPH",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async save(name: string): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Save",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async load(name: string): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Load",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async quicksave(): Promise<void> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Quicksave",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async quickload(): Promise<void> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Quickload",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async canRailsWarpAt(factor: number): Promise<boolean> {
    const args = [
      {
        position: 0,
        value: encoding.encodeSint32(factor),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "CanRailsWarpAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeBool(this.conn, result.value);
  }

  async warpTo(ut: number, maxRailsRate: number, maxPhysicsRate: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeDouble(ut),
      },
      {
        position: 1,
        value: encoding.encodeFloat(maxRailsRate),
      },
      {
        position: 2,
        value: encoding.encodeFloat(maxPhysicsRate),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "WarpTo",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async transformPosition(position: [number, number, number], from: ReferenceFrame, to: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encodeTuple(position),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(from.id),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(to.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    const tuple = encoding.decodeTuple(this.conn, result.value).items;
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])];
  }

  async transformDirection(direction: [number, number, number], from: ReferenceFrame, to: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encodeTuple(direction),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(from.id),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(to.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformDirection",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    const tuple = encoding.decodeTuple(this.conn, result.value).items;
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])];
  }

  async transformRotation(rotation: [number, number, number, number], from: ReferenceFrame, to: ReferenceFrame): Promise<[number, number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encodeTuple(rotation),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(from.id),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(to.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformRotation",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    const tuple = encoding.decodeTuple(this.conn, result.value).items;
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2]), encoding.decodeDouble(this.conn, tuple[3])];
  }

  async transformVelocity(position: [number, number, number], velocity: [number, number, number], from: ReferenceFrame, to: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encodeTuple(position),
      },
      {
        position: 1,
        value: encoding.encodeTuple(velocity),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(from.id),
      },
      {
        position: 3,
        value: encoding.encodeVarint64(to.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "TransformVelocity",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    const tuple = encoding.decodeTuple(this.conn, result.value).items;
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])];
  }

  async raycastDistance(position: [number, number, number], direction: [number, number, number], referenceFrame: ReferenceFrame): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encodeTuple(position),
      },
      {
        position: 1,
        value: encoding.encodeTuple(direction),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RaycastDistance",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeDouble(this.conn, result.value);
  }

  async raycastPart(position: [number, number, number], direction: [number, number, number], referenceFrame: ReferenceFrame): Promise<Part> {
    const args = [
      {
        position: 0,
        value: encoding.encodeTuple(position),
      },
      {
        position: 1,
        value: encoding.encodeTuple(direction),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "RaycastPart",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return Part.decode(this.conn, result.value);
  }

  async getGameMode(): Promise<void /*enum*/> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_GameMode",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeEnum(this.conn, result.value);
  }

  async getScience(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Science",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeFloat(this.conn, result.value);
  }

  async getFunds(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Funds",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeDouble(this.conn, result.value);
  }

  async getReputation(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Reputation",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeFloat(this.conn, result.value);
  }

  async getActiveVessel(): Promise<Vessel> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_ActiveVessel",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return Vessel.decode(this.conn, result.value);
  }

  async setActiveVessel(value: Vessel): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeVarint64(value.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_ActiveVessel",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getVessels(): Promise<Vessel[]> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Vessels",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    const list = encoding.decodeList(this.conn, result.value).items;
    return list.map((item) => { return Vessel.decode(this.conn, item)});
  }

  async getBodies(): Promise<void /*dict*/> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Bodies",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeDict(this.conn, result.value);
  }

  async getTargetBody(): Promise<CelestialBody> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_TargetBody",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return CelestialBody.decode(this.conn, result.value);
  }

  async setTargetBody(value: CelestialBody): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeVarint64(value.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_TargetBody",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getTargetVessel(): Promise<Vessel> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_TargetVessel",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return Vessel.decode(this.conn, result.value);
  }

  async setTargetVessel(value: Vessel): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeVarint64(value.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_TargetVessel",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getTargetDockingPort(): Promise<DockingPort> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_TargetDockingPort",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return DockingPort.decode(this.conn, result.value);
  }

  async setTargetDockingPort(value: DockingPort): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeVarint64(value.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_TargetDockingPort",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getWaypointManager(): Promise<WaypointManager> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WaypointManager",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return WaypointManager.decode(this.conn, result.value);
  }

  async getContractManager(): Promise<ContractManager> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_ContractManager",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return ContractManager.decode(this.conn, result.value);
  }

  async getCamera(): Promise<Camera> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Camera",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return Camera.decode(this.conn, result.value);
  }

  async getUiVisible(): Promise<boolean> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_UIVisible",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeBool(this.conn, result.value);
  }

  async setUiVisible(value: boolean): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeBool(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_UIVisible",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getNavball(): Promise<boolean> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Navball",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeBool(this.conn, result.value);
  }

  async setNavball(value: boolean): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeBool(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_Navball",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getUt(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_UT",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeDouble(this.conn, result.value);
  }

  async getG(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_G",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeDouble(this.conn, result.value);
  }

  async getWarpMode(): Promise<void /*enum*/> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WarpMode",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeEnum(this.conn, result.value);
  }

  async getWarpRate(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WarpRate",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeFloat(this.conn, result.value);
  }

  async getWarpFactor(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_WarpFactor",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeFloat(this.conn, result.value);
  }

  async getRailsWarpFactor(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_RailsWarpFactor",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeSint32(this.conn, result.value);
  }

  async setRailsWarpFactor(value: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeSint32(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_RailsWarpFactor",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getPhysicsWarpFactor(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_PhysicsWarpFactor",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeSint32(this.conn, result.value);
  }

  async setPhysicsWarpFactor(value: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encodeSint32(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "set_PhysicsWarpFactor",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return undefined;
  }

  async getMaximumRailsWarpFactor(): Promise<number> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_MaximumRailsWarpFactor",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeSint32(this.conn, result.value);
  }

  async getFarAvailable(): Promise<boolean> {
    const args: Array<krpc.Argument> = [];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_FARAvailable",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    
    return encoding.decodeBool(this.conn, result.value);
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
    return new Antenna(conn, bb.readVarint64();
  }

  async transmit(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Antenna_Transmit",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async cancel(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Antenna_Cancel",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new AutoPilot(conn, bb.readVarint64();
  }

  async engage(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "AutoPilot_Engage",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async disengage(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "AutoPilot_Disengage",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async wait(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "AutoPilot_Wait",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async targetPitchAndHeading(pitch: number, heading: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeFloat(pitch),
      },
      {
        position: 2,
        value: encoding.encodeFloat(heading),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "AutoPilot_TargetPitchAndHeading",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Camera(conn, bb.readVarint64();
  }

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
    return new CargoBay(conn, bb.readVarint64();
  }

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
    return new CelestialBody(conn, bb.readVarint64();
  }

  async surfaceHeight(latitude: number, longitude: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_SurfaceHeight",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async bedrockHeight(latitude: number, longitude: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_BedrockHeight",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async mslPosition(latitude: number, longitude: number, referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
      {
        position: 3,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_MSLPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async surfacePosition(latitude: number, longitude: number, referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
      {
        position: 3,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_SurfacePosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async bedrockPosition(latitude: number, longitude: number, referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
      {
        position: 3,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_BedrockPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async positionAtAltitude(latitude: number, longitude: number, altitude: number, referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
      {
        position: 3,
        value: encoding.encodeDouble(altitude),
      },
      {
        position: 4,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_PositionAtAltitude",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async latitudeAtPosition(position: [number, number, number], referenceFrame: ReferenceFrame): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeTuple(position),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_LatitudeAtPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async longitudeAtPosition(position: [number, number, number], referenceFrame: ReferenceFrame): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeTuple(position),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_LongitudeAtPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async altitudeAtPosition(position: [number, number, number], referenceFrame: ReferenceFrame): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeTuple(position),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_AltitudeAtPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async atmosphericDensityAtPosition(position: [number, number, number], referenceFrame: ReferenceFrame): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeTuple(position),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_AtmosphericDensityAtPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async temperatureAt(position: [number, number, number], referenceFrame: ReferenceFrame): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeTuple(position),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_TemperatureAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async densityAt(altitude: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(altitude),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_DensityAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async pressureAt(altitude: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(altitude),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_PressureAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async biomeAt(latitude: number, longitude: number): Promise<string> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_BiomeAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeString(this.conn, result.value)(this.conn, result);
  }

  async position(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_Position",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async velocity(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_Velocity",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async rotation(referenceFrame: ReferenceFrame): Promise<[number, number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_Rotation",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2]), encoding.decodeDouble(this.conn, tuple[3])](this.conn, result);
  }

  async direction(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_Direction",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async angularVelocity(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "CelestialBody_AngularVelocity",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

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
    return new CommLink(conn, bb.readVarint64();
  }

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
    return new CommNode(conn, bb.readVarint64();
  }

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
    return new Comms(conn, bb.readVarint64();
  }

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
    return new Contract(conn, bb.readVarint64();
  }

  async cancel(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Contract_Cancel",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async accept(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Contract_Accept",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async decline(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Contract_Decline",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new ContractManager(conn, bb.readVarint64();
  }

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
    return new ContractParameter(conn, bb.readVarint64();
  }

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
    return new Control(conn, bb.readVarint64();
  }

  async activateNextStage(): Promise<Vessel[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Control_ActivateNextStage",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Vessel.decode(this.conn, item)})(this.conn, result);
  }

  async getActionGroup(group: number): Promise<boolean> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeUint32(group),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Control_GetActionGroup",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeBool(this.conn, result.value)(this.conn, result);
  }

  async setActionGroup(group: number, state: boolean): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeUint32(group),
      },
      {
        position: 2,
        value: encoding.encodeBool(state),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Control_SetActionGroup",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async toggleActionGroup(group: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeUint32(group),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Control_ToggleActionGroup",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async addNode(ut: number, prograde: number, normal: number, radial: number): Promise<Node> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(ut),
      },
      {
        position: 2,
        value: encoding.encodeFloat(prograde),
      },
      {
        position: 3,
        value: encoding.encodeFloat(normal),
      },
      {
        position: 4,
        value: encoding.encodeFloat(radial),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Control_AddNode",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Node.decode(this.conn, result.value)(this.conn, result);
  }

  async removeNodes(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Control_RemoveNodes",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new ControlSurface(conn, bb.readVarint64();
  }

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
    return new CrewMember(conn, bb.readVarint64();
  }

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
    return new Decoupler(conn, bb.readVarint64();
  }

  async decouple(): Promise<Vessel> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Decoupler_Decouple",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Vessel.decode(this.conn, result.value)(this.conn, result);
  }

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
    return new DockingPort(conn, bb.readVarint64();
  }

  async undock(): Promise<Vessel> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "DockingPort_Undock",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Vessel.decode(this.conn, result.value)(this.conn, result);
  }

  async position(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "DockingPort_Position",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async direction(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "DockingPort_Direction",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async rotation(referenceFrame: ReferenceFrame): Promise<[number, number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "DockingPort_Rotation",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2]), encoding.decodeDouble(this.conn, tuple[3])](this.conn, result);
  }

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
    return new Engine(conn, bb.readVarint64();
  }

  async toggleMode(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Engine_ToggleMode",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Experiment(conn, bb.readVarint64();
  }

  async run(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Experiment_Run",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async transmit(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Experiment_Transmit",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async dump(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Experiment_Dump",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async reset(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Experiment_Reset",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Fairing(conn, bb.readVarint64();
  }

  async jettison(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Fairing_Jettison",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Flight(conn, bb.readVarint64();
  }

  async simulateAerodynamicForceAt(body: CelestialBody, position: [number, number, number], velocity: [number, number, number]): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(body.id),
      },
      {
        position: 2,
        value: encoding.encodeTuple(position),
      },
      {
        position: 3,
        value: encoding.encodeTuple(velocity),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Flight_SimulateAerodynamicForceAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

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
    return new Force(conn, bb.readVarint64();
  }

  async remove(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Force_Remove",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Intake(conn, bb.readVarint64();
  }

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
    return new LaunchClamp(conn, bb.readVarint64();
  }

  async release(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "LaunchClamp_Release",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Leg(conn, bb.readVarint64();
  }

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
    return new Light(conn, bb.readVarint64();
  }

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
    return new Module(conn, bb.readVarint64();
  }

  async hasField(name: string): Promise<boolean> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_HasField",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeBool(this.conn, result.value)(this.conn, result);
  }

  async getField(name: string): Promise<string> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_GetField",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeString(this.conn, result.value)(this.conn, result);
  }

  async setFieldInt(name: string, value: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
      {
        position: 2,
        value: encoding.encodeSint32(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_SetFieldInt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async setFieldFloat(name: string, value: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
      {
        position: 2,
        value: encoding.encodeFloat(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_SetFieldFloat",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async setFieldString(name: string, value: string): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
      {
        position: 2,
        value: encoding.encodeString(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_SetFieldString",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async resetField(name: string): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_ResetField",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async hasEvent(name: string): Promise<boolean> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_HasEvent",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeBool(this.conn, result.value)(this.conn, result);
  }

  async triggerEvent(name: string): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_TriggerEvent",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async hasAction(name: string): Promise<boolean> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_HasAction",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeBool(this.conn, result.value)(this.conn, result);
  }

  async setAction(name: string, value: boolean): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
      {
        position: 2,
        value: encoding.encodeBool(value),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Module_SetAction",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Node(conn, bb.readVarint64();
  }

  async burnVector(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Node_BurnVector",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async remainingBurnVector(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Node_RemainingBurnVector",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async remove(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Node_Remove",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async position(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Node_Position",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async direction(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Node_Direction",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

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
    return new Orbit(conn, bb.readVarint64();
  }

  async meanAnomalyAtUt(ut: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(ut),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_MeanAnomalyAtUT",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async radiusAtTrueAnomaly(trueAnomaly: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(trueAnomaly),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_RadiusAtTrueAnomaly",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async trueAnomalyAtRadius(radius: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(radius),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_TrueAnomalyAtRadius",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async trueAnomalyAtUt(ut: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(ut),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_TrueAnomalyAtUT",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async utAtTrueAnomaly(trueAnomaly: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(trueAnomaly),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_UTAtTrueAnomaly",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async eccentricAnomalyAtUt(ut: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(ut),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_EccentricAnomalyAtUT",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async orbitalSpeedAt(time: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(time),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_OrbitalSpeedAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async radiusAt(ut: number): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(ut),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_RadiusAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async positionAt(ut: number, referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(ut),
      },
      {
        position: 2,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_PositionAt",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async timeOfClosestApproach(target: Orbit): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(target.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_TimeOfClosestApproach",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async distanceAtClosestApproach(target: Orbit): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(target.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_DistanceAtClosestApproach",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async listClosestApproaches(target: Orbit, orbits: number): Promise<void /*list*/[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(target.id),
      },
      {
        position: 2,
        value: encoding.encodeSint32(orbits),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_ListClosestApproaches",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return list.map((item) => { return encoding.decodeDouble(this.conn, item)})})(this.conn, result);
  }

  async trueAnomalyAtAn(target: Orbit): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(target.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_TrueAnomalyAtAN",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async trueAnomalyAtDn(target: Orbit): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(target.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_TrueAnomalyAtDN",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
  }

  async relativeInclination(target: Orbit): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(target.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Orbit_RelativeInclination",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeDouble(this.conn, result.value)(this.conn, result);
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
    return new Parachute(conn, bb.readVarint64();
  }

  async deploy(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parachute_Deploy",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async arm(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parachute_Arm",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Part(conn, bb.readVarint64();
  }

  async position(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_Position",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async centerOfMass(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_CenterOfMass",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async boundingBox(referenceFrame: ReferenceFrame): Promise<[[number, number, number], [number, number, number]]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_BoundingBox",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [[encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])], [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])]](this.conn, result);
  }

  async direction(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_Direction",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async velocity(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_Velocity",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async rotation(referenceFrame: ReferenceFrame): Promise<[number, number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_Rotation",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2]), encoding.decodeDouble(this.conn, tuple[3])](this.conn, result);
  }

  async addForce(force: [number, number, number], position: [number, number, number], referenceFrame: ReferenceFrame): Promise<Force> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeTuple(force),
      },
      {
        position: 2,
        value: encoding.encodeTuple(position),
      },
      {
        position: 3,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_AddForce",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Force.decode(this.conn, result.value)(this.conn, result);
  }

  async instantaneousForce(force: [number, number, number], position: [number, number, number], referenceFrame: ReferenceFrame): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeTuple(force),
      },
      {
        position: 2,
        value: encoding.encodeTuple(position),
      },
      {
        position: 3,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Part_InstantaneousForce",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new Parts(conn, bb.readVarint64();
  }

  async withName(name: string): Promise<Part[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parts_WithName",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Part.decode(this.conn, item)})(this.conn, result);
  }

  async withTitle(title: string): Promise<Part[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(title),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parts_WithTitle",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Part.decode(this.conn, item)})(this.conn, result);
  }

  async withTag(tag: string): Promise<Part[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(tag),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parts_WithTag",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Part.decode(this.conn, item)})(this.conn, result);
  }

  async withModule(moduleName: string): Promise<Part[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(moduleName),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parts_WithModule",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Part.decode(this.conn, item)})(this.conn, result);
  }

  async inStage(stage: number): Promise<Part[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(stage),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parts_InStage",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Part.decode(this.conn, item)})(this.conn, result);
  }

  async inDecoupleStage(stage: number): Promise<Part[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(stage),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parts_InDecoupleStage",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Part.decode(this.conn, item)})(this.conn, result);
  }

  async modulesWithName(moduleName: string): Promise<Module[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(moduleName),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Parts_ModulesWithName",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Module.decode(this.conn, item)})(this.conn, result);
  }

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
    return new Propellant(conn, bb.readVarint64();
  }

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
    return new RCS(conn, bb.readVarint64();
  }

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
    return new Radiator(conn, bb.readVarint64();
  }

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
    return new ReactionWheel(conn, bb.readVarint64();
  }

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
    return new ReferenceFrame(conn, bb.readVarint64();
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
    return new Resource(conn, bb.readVarint64();
  }

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
    return new ResourceConverter(conn, bb.readVarint64();
  }

  async active(index: number): Promise<boolean> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_Active",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeBool(this.conn, result.value)(this.conn, result);
  }

  async name(index: number): Promise<string> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_Name",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeString(this.conn, result.value)(this.conn, result);
  }

  async start(index: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_Start",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async stop(index: number): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_Stop",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async state(index: number): Promise<void /*enum*/> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_State",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeEnum(this.conn, result.value)(this.conn, result);
  }

  async statusInfo(index: number): Promise<string> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_StatusInfo",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeString(this.conn, result.value)(this.conn, result);
  }

  async inputs(index: number): Promise<string[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_Inputs",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return encoding.decodeString(this.conn, item)})(this.conn, result);
  }

  async outputs(index: number): Promise<string[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(index),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "ResourceConverter_Outputs",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return encoding.decodeString(this.conn, item)})(this.conn, result);
  }

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
    return new ResourceHarvester(conn, bb.readVarint64();
  }

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
    return new ResourceTransfer(conn, bb.readVarint64();
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
    return new Resources(conn, bb.readVarint64();
  }

  async withResource(name: string): Promise<Resource[]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Resources_WithResource",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return list.map((item) => { return Resource.decode(this.conn, item)})(this.conn, result);
  }

  async hasResource(name: string): Promise<boolean> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Resources_HasResource",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeBool(this.conn, result.value)(this.conn, result);
  }

  async max(name: string): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Resources_Max",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeFloat(this.conn, result.value)(this.conn, result);
  }

  async amount(name: string): Promise<number> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Resources_Amount",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return encoding.decodeFloat(this.conn, result.value)(this.conn, result);
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
    return new ScienceData(conn, bb.readVarint64();
  }

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
    return new ScienceSubject(conn, bb.readVarint64();
  }

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
    return new Sensor(conn, bb.readVarint64();
  }

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
    return new SolarPanel(conn, bb.readVarint64();
  }

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
    return new Thruster(conn, bb.readVarint64();
  }

  async thrustPosition(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Thruster_ThrustPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async thrustDirection(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Thruster_ThrustDirection",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async initialThrustPosition(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Thruster_InitialThrustPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async initialThrustDirection(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Thruster_InitialThrustDirection",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async gimbalPosition(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Thruster_GimbalPosition",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

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
    return new Vessel(conn, bb.readVarint64();
  }

  async recover(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_Recover",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

  async flight(referenceFrame: ReferenceFrame): Promise<Flight> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_Flight",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Flight.decode(this.conn, result.value)(this.conn, result);
  }

  async resourcesInDecoupleStage(stage: number, cumulative: boolean): Promise<Resources> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeSint32(stage),
      },
      {
        position: 2,
        value: encoding.encodeBool(cumulative),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_ResourcesInDecoupleStage",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Resources.decode(this.conn, result.value)(this.conn, result);
  }

  async position(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_Position",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async boundingBox(referenceFrame: ReferenceFrame): Promise<[[number, number, number], [number, number, number]]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_BoundingBox",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [[encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])], [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])]](this.conn, result);
  }

  async velocity(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_Velocity",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async rotation(referenceFrame: ReferenceFrame): Promise<[number, number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_Rotation",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2]), encoding.decodeDouble(this.conn, tuple[3])](this.conn, result);
  }

  async direction(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_Direction",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

  async angularVelocity(referenceFrame: ReferenceFrame): Promise<[number, number, number]> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeVarint64(referenceFrame.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Vessel_AngularVelocity",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return [encoding.decodeDouble(this.conn, tuple[0]), encoding.decodeDouble(this.conn, tuple[1]), encoding.decodeDouble(this.conn, tuple[2])](this.conn, result);
  }

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
    return new Waypoint(conn, bb.readVarint64();
  }

  async remove(): Promise<void> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "Waypoint_Remove",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return undefined(this.conn, result);
  }

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
    return new WaypointManager(conn, bb.readVarint64();
  }

  async addWaypoint(latitude: number, longitude: number, body: CelestialBody, name: string): Promise<Waypoint> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
      {
        position: 3,
        value: encoding.encodeVarint64(body.id),
      },
      {
        position: 4,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "WaypointManager_AddWaypoint",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Waypoint.decode(this.conn, result.value)(this.conn, result);
  }

  async addWaypointAtAltitude(latitude: number, longitude: number, altitude: number, body: CelestialBody, name: string): Promise<Waypoint> {
    const args = [
      {
        position: 0,
        value: encoding.encode_u64(self.id),
      },
      {
        position: 1,
        value: encoding.encodeDouble(latitude),
      },
      {
        position: 2,
        value: encoding.encodeDouble(longitude),
      },
      {
        position: 3,
        value: encoding.encodeDouble(altitude),
      },
      {
        position: 4,
        value: encoding.encodeVarint64(body.id),
      },
      {
        position: 5,
        value: encoding.encodeString(name),
      },
    ];
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "",
      procedure: "WaypointManager_AddWaypointAtAltitude",
      arguments: args,
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject
        });
      }
    );
    return Waypoint.decode(this.conn, result.value)(this.conn, result);
  }

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
    return new Wheel(conn, bb.readVarint64();
  }

}
