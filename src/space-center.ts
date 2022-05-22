import Long from "long";
import { KRPCConnection } from "./connection";
import * as krpc from "./generated/proto/krpc";
import ByteBuffer from "bytebuffer";

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
}
export class Control {
  private conn: KRPCConnection;
  private id: Long;
  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
  }

  async activateNextStage(): Promise<void> {
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
    const bytebuffer = ByteBuffer.wrap(result.value);
    console.log(bytebuffer);
  }
}

export class Vessel {
  private conn: KRPCConnection;
  private id: Long;
  constructor(conn: KRPCConnection, id: Long) {
    this.conn = conn;
    this.id = id;
    console.log("id", id);
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
}
