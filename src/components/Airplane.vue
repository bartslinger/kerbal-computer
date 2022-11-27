<script setup lang="ts">
import { ref } from "vue";
import { TaskMachine } from "./task-machine";

const version = ref("loading");
const ut = ref(0);

const taskMachine = new TaskMachine();

await taskMachine.init();

// continuous loop
taskMachine.run();

const click = () => {
  console.log("clicked");
};
</script>

<template>
  <input type="button" @click="click" value="Launch!" />
  <h2>{{ version }}</h2>
  <h2>ut: {{ ut.toFixed(1) }}</h2>
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
