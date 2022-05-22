import Long from "long";
import { KRPCConnection } from "./connection";
import * as krpc from "./generated/proto/krpc";
import ByteBuffer from "bytebuffer";

export class SpaceCenter {
  private conn: KRPCConnection;
  constructor(conn: KRPCConnection) {
    this.conn = conn;
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
    return new Vessel(bytebuffer.readVarint64());
  }
}
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
