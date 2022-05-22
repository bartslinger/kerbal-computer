import { KRPCConnection } from "./connection";
import * as krpc from "./generated/proto/krpc";
import ByteBuffer from "bytebuffer";

export class KRPC {
  private conn: KRPCConnection;
  constructor(conn: KRPCConnection) {
    this.conn = conn;
  }

  async getStatus(): Promise<krpc.Status> {
    const procedureCall = krpc.ProcedureCall.fromPartial({
      service: "KRPC",
      procedure: "GetStatus",
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
    const status = krpc.Status.decode(result.value);

    return status;
  }
}
