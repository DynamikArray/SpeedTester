<template>
  <v-container fluid class="px-3">
    <v-row class="text-center" dense>
      <v-col cols="12">
        <SpeedtestWrapper />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SpeedtestWrapper from "../components/Speedtest/SpeedtestWrapper";

export default {
  name: "Home",

  components: {
    SpeedtestWrapper,
  },
};
</script>
