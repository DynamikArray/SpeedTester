<template>
  <div>
    <v-data-table ref="dtSpeedTestResults" :items="items" :headers="headers">
      <template v-slot:item.timestamp="{ item }">
        <div class="text-caption">{{ item.timestamp | formatDateTime }}</div>
      </template>

      <template v-slot:item.download="{ item }">
        <div class="text-h5">
          {{ item.download.bandwidth | convertToMegabits }}
          <span class="text-subtitle-2">Mbps</span>
        </div>
      </template>

      <template v-slot:item.upload="{ item }">
        <div class="text-h5">
          {{ item.upload.bandwidth | convertToMegabits }}
          <span class="text-subtitle-2">Mbps</span>
        </div>
      </template>

      <template v-slot:item.interface.internalIp="{ item }">
        <div class="text-caption">{{ item.interface.internalIp }}</div>
      </template>

      <template v-slot:item.interface.macAddr="{ item }">
        <div class="text-caption">{{ item.interface.macAddr }}</div>
      </template>

      <template v-slot:item.server="{ item }">
        <div class="d-flex flex-column align-start justify-start">
          <div class="d-flex">
            {{ item.server.name }}
          </div>
          <div class="d-flex">
            {{ item.server.location }}
          </div>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { headers } from "./headers.js";

export default {
  name: "SpeedTestDataTable",
  components: {},
  data: () => ({
    headers,
  }),
  props: {
    items: {
      type: [Boolean, Array],
    },
  },
};
</script>

<style lang="scss" scoped></style>
