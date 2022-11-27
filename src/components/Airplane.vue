<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { TaskMachine } from "./task-machine";

const version = ref("loading");
const ut = ref(0);

const rollSetpoint = ref(0.0);
const pitchSetpoint = ref(5.0);
const altitudeSetpoint = ref(2000.0);

const taskMachine = new TaskMachine();

// should really be awaited, but triggers error
taskMachine.init();

// continuous loop
taskMachine.run();

watchEffect(() => {
  taskMachine.autopilotSetpoint.next({
    roll: rollSetpoint.value,
    pitch: pitchSetpoint.value,
    altitude: altitudeSetpoint.value,
    velocity: 100.0,
  });
});

const click = () => {
  taskMachine.trigger();
  console.log("clicked");
};
</script>

<template>
  <div>
    airpolane
    <input type="button" @click="click" value="Launch!" />
    <br />
    <br />
    <input type="number" v-model="rollSetpoint" />{{ rollSetpoint }}
    <br />
    <br />
    <input type="number" v-model="altitudeSetpoint" />{{ altitudeSetpoint }}
    <h2>{{ version }}</h2>
    <h2>ut: {{ ut.toFixed(1) }}</h2>
  </div>
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
