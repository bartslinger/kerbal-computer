<script setup lang="ts">
import { ref } from "vue";

import * as krpc from "../generated/proto/krpc";

const version = ref("loading");

const rpcConnection = new WebSocket("ws://127.0.0.1:50000");
rpcConnection.binaryType = "arraybuffer";
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
};

rpcConnection.onmessage = (e) => {
  const response = krpc.Response.decode(new Uint8Array(e.data));
  const status = krpc.Status.decode(response.results[0].value);
  version.value = status.version;
};

defineProps<{ msg: string }>();

const count = ref(0);
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
