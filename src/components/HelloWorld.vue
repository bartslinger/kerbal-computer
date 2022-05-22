<script setup lang="ts">
import { ref } from "vue";

import * as krpc from "../generated/proto/krpc";
import * as protobufjs from "protobufjs";

const version = ref("loading");
const ut = ref(0);
const navball = ref(false);
const queueLength = ref(0);

const rpcConnection = new WebSocket("ws://127.0.0.1:50000");
rpcConnection.binaryType = "arraybuffer";

const queue: Array<(response: krpc.Response) => void> = [];

type ScheduledProcedureCall = {
  procedureCall: krpc.ProcedureCall;
  resolve: (value: krpc.ProcedureResult) => void;
  reject: () => void;
};

const scheduledProcedureCalls: Array<ScheduledProcedureCall> = [];

const getUT = async (): Promise<number> => {
  // schedule the request
  const procedureCall = krpc.ProcedureCall.fromPartial({
    service: "SpaceCenter",
    procedure: "get_UT",
  });
  const promise = new Promise<krpc.ProcedureResult>((resolve, reject) => {
    scheduledProcedureCalls.push({
      procedureCall,
      resolve,
      reject,
    });
  });
  const procedureResult = await promise;
  console.log("GOT PROCEDURE RESULT:");
  console.log(procedureResult);
  return 12;
};

const sendRequest = () => {
  const getUtRequest = krpc.Request.fromPartial({
    calls: [
      {
        service: "SpaceCenter",
        procedure: "get_UT",
      },
      {
        service: "SpaceCenter",
        procedure: "get_Navball",
      },
    ],
  });
  rpcConnection.send(krpc.Request.encode(getUtRequest).finish());
  queue.push((response) => {
    const output = response.results[0].value;
    const dataView = new DataView(output.buffer);
    ut.value = dataView.getFloat64(output.byteOffset, true);
    console.log(response.results[1].value);

    const dataView2 = new DataView(response.results[1].value.buffer);
    navball.value =
      dataView2.getUint8(response.results[1].value.byteOffset) !== 0;
  });
};

rpcConnection.onopen = (e) => {
  const request = krpc.Request.fromPartial({
    calls: [
      {
        service: "KRPC",
        procedure: "GetStatus",
      },
    ],
  });

  rpcConnection.send(krpc.Request.encode(request).finish());
  queue.push((response) => {
    const status = krpc.Status.decode(response.results[0].value);
    version.value = status.version;
  });
};

let cnt = 0;
const start = Date.now();
rpcConnection.onmessage = (e) => {
  const response = krpc.Response.decode(new Uint8Array(e.data));
  const callback = queue.shift();
  queueLength.value = queue.length;
  if (callback === undefined) return;
  callback(response);

  // send next request
  sendRequest();
  cnt += 1;
  const now = Date.now();
  const diff = now - start;
  // console.log((1000 * cnt) / diff);
};

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
