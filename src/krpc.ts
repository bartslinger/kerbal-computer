import { KRPCConnection } from "./connection";
import * as krpc from "./generated/proto/krpc";
import ByteBuffer from "bytebuffer";

export class KRPC {
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
}
