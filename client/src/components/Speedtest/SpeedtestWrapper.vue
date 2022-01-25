<template>
  <v-container class="speedtestWrapper">
    <v-row>
      <v-col>
        <div class="d-flex flex-column align-center">
          <div class="my-3 text-h3">Test Our Internet Speed</div>

          <div v-if="isRunning && speedTestEventData">
            <SpeedtestProgressCard :progressEvent="speedTestEventData"></SpeedtestProgressCard>
          </div>

          <div v-if="speedTestResults" class="d-flex">
            <SpeedtestResultsCard :results="speedTestResults"></SpeedtestResultsCard>
          </div>

          <v-btn large v-if="!isRunning" color="green" class="my-6 shadow-sm" @click="startSpeedTest"
            ><v-icon large class="mr-2">fa-tachometer-alt</v-icon>
            <div class="text-h5 font-weight-bold pa-2">Run A Speed Test</div></v-btn
          >
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <SpeedtestPastResults />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import SpeedtestProgressCard from "./SpeedtestProgressCard";
import SpeedtestResultsCard from "./SpeedtestResultsCard";
import SpeedtestPastResults from "./SpeedtestPastResults";

export default {
  name: "SpeedtestWrapper",
  components: {
    SpeedtestProgressCard,
    SpeedtestResultsCard,
    SpeedtestPastResults,
  },
  computed: {
    ...mapGetters({
      speedTestEventData: "getSpeedTestEventData",
      isRunning: "getIsSpeedTestRunning",
      speedTestResults: "getSpeedTestResults",
    }),
  },
  methods: {
    startSpeedTest() {
      this.$store.dispatch("socket_startSpeedTest");
    },
  },
};
</script>

<style scoped></style>
