<template>
  <div class="d-flex align-center justify-center">
    <v-card color="secondary darken-4 pa-5" rounded="10">
      <h1 class="text-h3">{{ progressTypeLabel }}</h1>
      <h1 class="text-h1">
        {{ progressSpeedValue | convertToMegabits
        }}<span class="text-h3 mx-4">Mbps</span>
      </h1>

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
export default {
  name: "SpeedtestProgressCard",
  props: {
    progressEvent: {
      type: [Object, Boolean],
    },
  },
  components: {},
  computed: {
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
      if (this.progressEvent.type == "upload") {
        return this.progressEvent.upload.bandwidth;
      }
      if (this.progressEvent.type == "download") {
        return this.progressEvent.download.bandwidth;
      }
      return 0;
    },
  },
};
</script>

<style scoped></style>
