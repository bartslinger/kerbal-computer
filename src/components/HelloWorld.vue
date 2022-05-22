<script setup lang="ts">
import { ref } from "vue";

import * as krpc from "../generated/proto/krpc";
import ByteBuffer from "bytebuffer";
import type Long from "long";

ByteBuffer.DEFAULT_ENDIAN = true;

const version = ref("loading");
const ut = ref(0);
const navball = ref(false);
const queueLength = ref(0);

const rpcConnection = new WebSocket("ws://127.0.0.1:50000");
rpcConnection.binaryType = "arraybuffer";

type ScheduledProcedureCall = {
  procedureCall: krpc.ProcedureCall;
  resolve: (value: krpc.ProcedureResult) => void;
  reject: () => void;
};

type PendingProcedureCall = {
  resolve: (value: krpc.ProcedureResult) => void;
  reject: () => void;
};

const scheduledProcedureCalls: Array<ScheduledProcedureCall> = [];
const pendingProcedureCalls: Array<PendingProcedureCall> = [];

class Vessel {
  private id: Long;
  constructor(id: Long) {
    this.id = id;
  }
}
const getActiveVessel = async (): Promise<Vessel> => {
  const procedureCall = krpc.ProcedureCall.fromPartial({
    service: "SpaceCenter",
    procedure: "get_ActiveVessel",
  });
  const result = await new Promise<krpc.ProcedureResult>((resolve, reject) => {
    scheduledProcedureCalls.push({
      procedureCall,
      resolve,
      reject,
    });
  });
  const bytebuffer = ByteBuffer.wrap(result.value);
  return new Vessel(bytebuffer.readVarint64());
};

const getUT = async (): Promise<number> => {
  // schedule the request
  const procedureCall = krpc.ProcedureCall.fromPartial({
    service: "SpaceCenter",
    procedure: "get_UT",
  });
  const result = await new Promise<krpc.ProcedureResult>((resolve, reject) => {
    scheduledProcedureCalls.push({
      procedureCall,
      resolve,
      reject,
    });
  });
  const bytebuffer = ByteBuffer.wrap(result.value);
  const ut = bytebuffer.readFloat64();
  return ut;
};

const getNavball = async (): Promise<boolean> => {
  const procedureCall = krpc.ProcedureCall.fromPartial({
    service: "SpaceCenter",
    procedure: "get_Navball",
  });
  const result = await new Promise<krpc.ProcedureResult>((resolve, reject) => {
    scheduledProcedureCalls.push({
      procedureCall,
      resolve,
      reject,
    });
  });
  const navball = ByteBuffer.wrap(result.value).readUint8() !== 0;
  return navball;
};

const sendRequest = () => {
  const request = krpc.Request.fromPartial({
    calls: [],
  });

  // Add scheduled procedure calls
  for (
    let scheduledProcedureCall;
    (scheduledProcedureCall = scheduledProcedureCalls.shift());

  ) {
    request.calls.push(scheduledProcedureCall.procedureCall);
    pendingProcedureCalls.push({
      resolve: scheduledProcedureCall.resolve,
      reject: scheduledProcedureCall.reject,
    });
  }

  // send = Date.now();
  // console.log(`${send} send`);
  rpcConnection.send(krpc.Request.encode(request).finish());
};

rpcConnection.onopen = (e) => {
  sendRequest();
};

rpcConnection.onmessage = (e) => {
  // const now = Date.now();
  // console.log(`${now} answer`);
  const response = krpc.Response.decode(new Uint8Array(e.data));
  response.results.forEach((result) => {
    const pendingProcedureCall = pendingProcedureCalls.shift();
    pendingProcedureCall?.resolve(result);
  });

  // console.log(scheduledProcedureCalls.length, pendingProcedureCalls.length);
  setTimeout(() => {
    sendRequest();
  }, 5);
};

const loop = async () => {
  const activeVessel = await getActiveVessel();
  console.log(activeVessel);
  for (;;) {
    const result = await Promise.all([getUT(), getNavball()]);
    ut.value = result[0];
    navball.value = result[1];
  }
};

loop();

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h2>{{ version }}</h2>
  <h2>ut: {{ ut.toFixed(1) }}</h2>
  <h2>navball: {{ navball }}</h2>
  <h2>Queue length: {{ queueLength }}</h2>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
