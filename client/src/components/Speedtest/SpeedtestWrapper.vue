<template>
  <v-container fluid class="speedtestWrapper pa-0">
    <v-row dense>
      <v-col>
        <!--Run Test -->
        <div class="d-flex flex-wrap align-start justify-center">
          <div
            class="d-flex flex-column align-center justify-start secondary darken-4 pa-4 rounded-lg"
          >
            <div v-if="!isRunning">
              <div class="text-h5 mb-3">Run Speed Test</div>
              <v-btn
                v-if="!isRunning"
                color="green"
                class="shadow-sm"
                @click="startSpeedTest"
                ><v-icon class="mr-2">fa-tachometer-alt</v-icon>
                <div class="font-weight-bold pa-2">Start A Test</div>
              </v-btn>
            </div>

            <div v-if="isRunning && !speedTestEventData">
              <div class="text-h3">Preparing Tests</div>
            </div>

            <div v-if="isRunning && speedTestEventData">
              <div
                class="d-flex align-start justify-start secondary darken-4 pa-4 rounded-lg"
              >
                <!-- Live Test -->
                <div class="d-flex flex-column align-center">
                  <div v-if="isRunning && speedTestEventData">
                    <SpeedtestProgressCard
                      :progressEvent="speedTestEventData"
                    ></SpeedtestProgressCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Results Card -->
        <div class="d-flex align-center justify-center my-2">
          <div v-if="speedTestResults" class="d-flex">
            <SpeedtestResultsCard
              :results="speedTestResults"
            ></SpeedtestResultsCard>
          </div>
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
