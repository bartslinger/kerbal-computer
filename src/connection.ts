import * as krpc from "./generated/proto/krpc";
export type ScheduledProcedureCall = {
  procedureCall: krpc.ProcedureCall;
  resolve: (value: krpc.ProcedureResult) => void;
  reject: () => void;
};

type PendingProcedureCall = {
  resolve: (value: krpc.ProcedureResult) => void;
  reject: () => void;
};

export class KRPCConnection {
  private scheduledProcedureCalls: Array<ScheduledProcedureCall>;
  private pendingProcedureCalls: Array<PendingProcedureCall>;
  private rpcConnection: WebSocket;

  constructor() {
    this.scheduledProcedureCalls = [];
    this.pendingProcedureCalls = [];
    this.rpcConnection = new WebSocket("ws://127.0.0.1:50000");
    this.rpcConnection.binaryType = "arraybuffer";

    this.rpcConnection.onopen = (e) => {
      this.sendRequest();
    };

    this.rpcConnection.onmessage = (e) => {
      // const now = Date.now();
      // console.log(`${now} answer`);
      const response = krpc.Response.decode(new Uint8Array(e.data));
      response.results.forEach((result) => {
        const pendingProcedureCall = this.pendingProcedureCalls.shift();
        pendingProcedureCall?.resolve(result);
      });

      // console.log(scheduledProcedureCalls.length, pendingProcedureCalls.length);
      setTimeout(() => {
        this.sendRequest();
      }, 5);
    };
  }

  private sendRequest() {
    const request = krpc.Request.fromPartial({
      calls: [],
    });

    // Add scheduled procedure calls
    for (
      let scheduledProcedureCall;
      (scheduledProcedureCall = this.scheduledProcedureCalls.shift());

    ) {
      request.calls.push(scheduledProcedureCall.procedureCall);
      this.pendingProcedureCalls.push({
        resolve: scheduledProcedureCall.resolve,
        reject: scheduledProcedureCall.reject,
      });
    }

    this.rpcConnection.send(krpc.Request.encode(request).finish());
  }

  scheduleProcedureCall(call: ScheduledProcedureCall): void {
    this.scheduledProcedureCalls.push(call);
  }
}
