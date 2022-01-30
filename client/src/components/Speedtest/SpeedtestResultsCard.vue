<template>
  <v-card v-if="results" color="secondary darken-3 pa-0 ma-0" rounded="10">
    <div class="pa-4">
      <div class="d-flex flex-wrap align-start justify-center">
        <div
          class="mx-2 d-flex order-sm-first order-md-first flex-column align-start secondary darken-2 pa-2 ma-3 rounded-lg"
        >
          <div class="text-h5">Download</div>
          <div class="text-h3 font-weight-bold">
            {{ downloadSpeed | convertToMegabits
            }}<span class="text-h4 mx-4">Mbps</span>
          </div>
        </div>

        <div
          class="mx-4 d-flex order-sm-last order-md-1 flex-column align-center secondary darken-2 pa-2 ma-3 rounded-lg mb-2"
        >
          <div class="d-flex align-center justify-center">
            <div class="d-flex align-baseline justify-start">
              <div class="font-weight-bold text-subTitle mx-2 align-baseline">
                Host:
              </div>
              <div class="d-flex flex-column align-start justify-start">
                <div class="font-weight-bold text-body-2 mx-2">
                  {{ serverInfo.host }}
                </div>
                <div class="font-weight-bold text-body-2 mx-2">
                  {{ serverInfo.location }}
                </div>
                <div class="font-weight-bold text-body-2 mx-2">
                  {{ serverInfo.name }}
                </div>
                <div class="font-weight-bold text-body-2 mx-2">
                  {{ serverInfo.ip }}
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex align-center justify-start mt-3">
            <div class="d-flex align-center justify-start">
              <div class="font-weight-bold text-heading">Ping</div>
              <div class="font-weight-bold text-h6 mx-2">
                {{ latency }}
              </div>
            </div>
          </div>
        </div>

        <div
          class="mx-2 d-flex order-sm-1 order-md-last flex-column align-start secondary darken-2 pa-2 ma-3 rounded-lg"
        >
          <div class="text-h5">Upload</div>
          <div class="text-h3 font-weight-bold">
            {{ uploadSpeed | convertToMegabits
            }}<span class="text-h4 mx-4">Mbps</span>
          </div>
        </div>
      </div>

      <div
        class="d-flex flex-wrap align-start justify-space-around pa-1 secondary darken-2 ma-2 rounded-lg"
      >
        <div class="d-flex align-center justify-start">
          <div class="font-weight-bold text-heading mx-2">Isp:</div>
          <div class="d-flex flex-column align-baseline justify-start">
            <div class="text-body-2 mx-2">
              {{ isp }}
            </div>
          </div>
        </div>

        <div class="d-flex align-center justify-start">
          <div class="font-weight-bold text-heading mx-2">External Ip:</div>
          <div class="d-flex flex-column align-start justify-start">
            <div class="text-body-2 mx-2">
              {{ interfaceMeta.externalIp }}
            </div>
          </div>
        </div>

        <div class="d-flex align-center justify-start">
          <div class="font-weight-bold text-heading mx-2">Internal Ip:</div>
          <div class="d-flex flex-column align-start justify-start">
            <div class="text-body-2 mx-2">
              {{ interfaceMeta.internalIp }}
            </div>
          </div>
        </div>

        <div class="d-flex align-baseline justify-start">
          <div class="font-weight-bold text-heading mx-2">Mac Addr:</div>
          <div class="d-flex flex-column align-start justify-start">
            <div class="text-body-2 mx-2">
              {{ interfaceMeta.macAddr }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "SpeedtestResultsCard",
  props: {
    results: {
      type: [Boolean, Object],
    },
  },
  computed: {
    serverInfo() {
      return this.results.server;
    },
    interfaceMeta() {
      return this.results.interface;
    },
    isp() {
      return this.results.isp || "Unknown";
    },
    latency() {
      return this.results.ping.latency || 0;
    },
    uploadSpeed() {
      return this.results.upload.bandwidth || 0;
    },
    downloadSpeed() {
      return this.results.download.bandwidth || 0;
    },
  },
};
</script>

<style scoped></style>
