<template>
  <v-container>
    <v-row class="text-center">
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
