import Long from "long";
import { KRPCConnection } from "./connection";
import * as krpc from "./generated/proto/krpc";
import ByteBuffer from "bytebuffer";

ByteBuffer.DEFAULT_ENDIAN = true;
export class SpaceCenter {
  private conn: KRPCConnection;
  constructor(conn: KRPCConnection) {
    this.conn = conn;
  }

  async getUT(): Promise<number> {
    // schedule the request
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_UT",
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const bytebuffer = ByteBuffer.wrap(result.value);
    const ut = bytebuffer.readFloat64();
    return ut;
  }

  async getNavball(): Promise<boolean> {
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Navball",
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const navball = ByteBuffer.wrap(result.value).readUint8() !== 0;
    return navball;
  }

  async getActiveVessel(): Promise<Vessel> {
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_ActiveVessel",
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const bytebuffer = ByteBuffer.wrap(result.value);
    return new Vessel(this.conn, bytebuffer.readVarint64());
  }

  async getVessels(): Promise<Vessel[]> {
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "get_Vessels",
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = krpc.List.decode(result.value);
    return list.items.map((value) => {
      const bytebuffer = ByteBuffer.wrap(value);
      return new Vessel(this.conn, bytebuffer.readVarint64());
    });
  }
}
export class Control {
  private conn: KRPCConnection;
  private id: Long;
  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  async activateNextStage(): Promise<Vessel[]> {
    const controlId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Control_ActivateNextStage",
      arguments: [
        {
          position: 0,
          value: controlId,
        },
      ],
    });

    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const list = krpc.List.decode(result.value);
    return list.items.map((value) => {
      const bytebuffer = ByteBuffer.wrap(value);
      return new Vessel(this.conn, bytebuffer.readVarint64());
    });
  }
}

export class Vessel {
  private conn: KRPCConnection;
  private id: Long;
  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  async getControl(): Promise<Control> {
    const vesselId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_Control",
      arguments: [
        {
          position: 0,
          value: vesselId,
        },
      ],
    });

    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const bytebuffer = ByteBuffer.wrap(result.value);
    return new Control(this.conn, bytebuffer.readVarint64());
  }

  async getAutoPilot(): Promise<AutoPilot> {
    const vesselId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_get_AutoPilot",
      arguments: [
        {
          position: 0,
          value: vesselId,
        },
      ],
    });

    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const bytebuffer = ByteBuffer.wrap(result.value);
    return new AutoPilot(this.conn, bytebuffer.readVarint64());
  }

  async flight(): Promise<Flight> {
    const vesselId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Vessel_Flight",
      arguments: [
        {
          position: 0,
          value: vesselId,
        },
      ],
    });

    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const bytebuffer = ByteBuffer.wrap(result.value);
    return new Flight(this.conn, bytebuffer.readVarint64());
  }
}

class AutoPilot {
  private conn: KRPCConnection;
  private id: Long;
  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  async engage(): Promise<void> {
    const autopilotId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );

    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_Engage",
      arguments: [
        {
          position: 0,
          value: autopilotId,
        },
      ],
    });
    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
  }

  async setTargetPitch(pitch: number): Promise<void> {
    const autopilotId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );

    const pitchBuf = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeFloat32(pitch)).buffer
    );

    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_TargetPitch",
      arguments: [
        {
          position: 0,
          value: autopilotId,
        },
        {
          position: 1,
          value: pitchBuf,
        },
      ],
    });

    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
  }

  async setTargetHeading(heading: number): Promise<void> {
    const autopilotId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );

    const headingBuf = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeFloat32(heading)).buffer
    );

    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "AutoPilot_set_TargetHeading",
      arguments: [
        {
          position: 0,
          value: autopilotId,
        },
        {
          position: 1,
          value: headingBuf,
        },
      ],
    });

    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
  }
}

class Flight {
  private conn: KRPCConnection;
  private id: Long;
  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  async getMeanAltitude(): Promise<number> {
    const flightId = new Uint8Array(
      ByteBuffer.wrap(new ByteBuffer().writeVarint64(this.id)).buffer
    );

    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "SpaceCenter",
      procedure: "Flight_get_MeanAltitude",
      arguments: [
        {
          position: 0,
          value: flightId,
        },
      ],
    });

    const result = await new Promise<krpc.ProcedureResult>(
      (resolve, reject) => {
        this.conn.scheduleProcedureCall({
          procedureCall,
          resolve,
          reject,
        });
      }
    );
    const bytebuffer = ByteBuffer.wrap(result.value);
    const altitude = bytebuffer.readFloat64();
    return altitude;
  }
}
