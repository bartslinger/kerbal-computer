<script setup lang="ts">
import { ref } from "vue";

import * as protobufjs from "protobufjs";

const version = ref("loading");

const connect = async () => {
  const proto = await protobufjs.load("src/assets/krpc.proto");

  const rpcConnection = new WebSocket("ws://127.0.0.1:50000");
  rpcConnection.binaryType = "arraybuffer";
  rpcConnection.onopen = (e) => {
    console.log(proto);
    const procedureCall = proto.lookupType("krpc.ProcedureCall");
    const message = procedureCall.create({
      service: "KRPC",
      procedure: "GetStatus",
    });

    const request = proto.lookupType("krpc.Request");
    const requestMessage = request.create({
      calls: [message],
    });

    console.log(requestMessage);
    rpcConnection.send(request.encode(requestMessage).finish());
  };

  rpcConnection.onmessage = (e) => {
    const responseType = proto.lookupType("krpc.Response");
    const response = responseType.decode(new Uint8Array(e.data));
    console.log(response.results[0].value);

    const statusType = proto.lookupType("krpc.Status");
    const status = statusType.decode(response.results[0].value);
    console.log(status);
    version.value = status.version;
  };
};

defineProps<{ msg: string }>();

const count = ref(0);

connect();
</script>

<template>
  <h2>{{ version }}</h2>
  <h1>{{ msg }}</h1>

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
