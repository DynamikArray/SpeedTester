<template>
  <div>
    <div class="text-h4">Past Results</div>
    <div class="text-body">
      {{ stats.avgDownload | convertToMegabits }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SpeedtestPastResults",
  computed: {
    ...mapGetters({
      stats: "logs/getStats",
      results: "logs/getResults",
    }),
  },
};
</script>

<style scoped></style>
