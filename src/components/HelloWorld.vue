<script setup lang="ts">
import { ref } from "vue";

import { KRPC } from "../services/krpc";
import {
  ReferenceFrame,
  SpaceCenter,
} from "../generated/services/space-center";
import { conn } from "../services/connection";
import ByteBuffer from "bytebuffer";

ByteBuffer.DEFAULT_ENDIAN = true;

const version = ref("loading");
const ut = ref(0);
const navball = ref(false);
const meanAltitude = ref(0);
const queueLength = ref(0);

const loop = async () => {
  const krpc = new KRPC(conn);
  const status = await krpc.getStatus();
  version.value = status.version;
  const spaceCenter = new SpaceCenter(conn);
  const activeVessel = await spaceCenter.getActiveVessel();
  console.log(activeVessel);
  const control = await activeVessel.getControl();
  console.log(control);

  const autopilot = await activeVessel.getAutoPilot();
  console.log("autopilot:");
  console.log(autopilot);

  await autopilot.engage();
  await autopilot.setTargetHeading(90);
  await autopilot.setTargetRoll(0);
  const body = await (await activeVessel.getOrbit()).getBody();
  const radius = await body.getEquatorialRadius();
  const gravitationalParameter = await body.getGravitationalParameter();
  const bodyReferenceFrame = await body.getReferenceFrame();
  const flight = await activeVessel.flight(bodyReferenceFrame);
  console.log("flight:");
  console.log(flight);
  console.log(gravitationalParameter);
  for (;;) {
    const data = await Promise.all([
      flight.getMeanAltitude(),
      spaceCenter.getUt(),
      spaceCenter.getNavball(),
      activeVessel.getMass(),
      activeVessel.getMaxThrust(),
      flight.getVerticalSpeed(),
    ]);
    const altitude = data[0];

    meanAltitude.value = data[0];
    ut.value = data[1];
    navball.value = data[2];
    const mass = data[3];
    const maxThrust = data[4];
    const verticalSpeed = data[5];

    const maxThrustAsAcceleration = maxThrust / mass;

    const g = gravitationalParameter / (radius * radius);
    const gravityForce = mass * g;
    const netZeroThrottle = gravityForce / maxThrust;

    // altitude control
    const altitudeSetpoint = 500;
    const altitudeError = altitudeSetpoint - altitude;
    // 1 m => 0.5 m/s
    const targetVerticalSpeed = Math.min(
      Math.max(altitudeError * 0.5, -30),
      30
    );

    const verticalSpeedError = targetVerticalSpeed - verticalSpeed;
    // 1m/s => 10 m/s^2
    const accelerationSetpoint = verticalSpeedError * 10;

    const throttle =
      netZeroThrottle + accelerationSetpoint / maxThrustAsAcceleration;

    // don't await commands
    // autopilot.setTargetPitch(90 - altitude / 100);
    autopilot.setTargetPitch(90);
    control.setThrottle(throttle);
  }
};

const pdControl = (altitude: number): number => {
  const error = 200 - altitude;
  const command = Math.min(Math.max(error * 0.001 + 0.3, 0), 1);
  return command;
};

loop();

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h2>{{ version }}</h2>
  <h2>ut: {{ ut.toFixed(1) }}</h2>

  <h2>altitude: {{ meanAltitude.toFixed(1) }}</h2>
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
