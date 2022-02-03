<template>
  <div class="speedTestProgressCard align-center justify-center">
    <v-card color="secondary darken-4 pa-1" rounded="10">
      <h1 class="text-h3">{{ progressTypeLabel }}</h1>

      <div class="">
        <VueSpeedometer
          :value="progressSpeedValueForNeedle"
          :minValue="0"
          :maxValue="1000"
          :width="300"
          :height="170"
          needleColor="#EEE"
          textColor="#EEE"
          :needleHeightRatio="0.7"
          :ringWidth="30"
          valueTextFontSize="0px"
          labelFontSize="14px"
        />
      </div>

      <div class="text-h3 pt-0 mt-0">
        {{ progressSpeedValue | convertToMegabits
        }}<span class="text-h5 mx-4">Mbps</span>
      </div>

      <div>
        <h5 class="mx-3">Time Remaining:</h5>
        <v-progress-linear
          :value="progressPercent"
          rounded
          striped
          stream
          height="20"
          buffer-value="0"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
import VueSpeedometer from "vue-speedometer";
export default {
  name: "SpeedtestProgressCard",
  components: {
    VueSpeedometer,
  },
  props: {
    progressEvent: {
      type: [Object, Boolean],
    },
  },
  data: () => ({}),
  computed: {
    isUpload() {
      if (this.progressEvent.type == "upload") return true;
      return false;
    },
    isDownload() {
      if (this.progressEvent.type == "download") return true;
      return false;
    },
    progressTimeStamp() {
      return this.progressEvent.timestamp;
    },
    progressTypeLabel() {
      return this.progressEvent.type.toUpperCase();
    },
    progressPercent() {
      return this.progressEvent.progress * 100;
    },
    progressSpeedValue() {
      if (this.isUpload) return this.progressEvent.upload.bandwidth;
      if (this.isDownload) return this.progressEvent.download.bandwidth;
      return 0;
    },
    progressSpeedValueForNeedle() {
      return this.$options.filters.convertToMegabits(this.progressSpeedValue);
    },
  },
};
</script>

<style>
.speedTestProgressCard {
  max-width: 400px;
}
</style>
