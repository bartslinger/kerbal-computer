<script setup lang="ts">
import { ref } from "vue";

const version = ref("loading");
const ut = ref(0);
</script>

<template>
  <input type="button" @click="run" value="Launch!" />
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
