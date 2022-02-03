<template>
  <div class="SpeedTestPastResults">
    <div class="text-h4 mb-1 text-left">Past Results</div>
    <SpeedTestDataTable :items="results" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SpeedTestDataTable from "./Datatable/SpeedTestDataTable";

export default {
  name: "SpeedtestPastResults",
  components: {
    SpeedTestDataTable,
  },
  computed: {
    ...mapGetters({
      stats: "logs/getStats",
      results: "logs/getResults",
    }),
  },
};
</script>

<style scoped></style>
