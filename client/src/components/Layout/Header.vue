<template>
  <v-app-bar app color="primary" dark :maxHeight="50">
    <div class="d-flex align-center"><h2 class="shadow">Speed Tester</h2></div>

    <v-spacer></v-spacer>

    <SocketStatus />
  </v-app-bar>
</template>

<script>
import SocketStatus from "@/components/Socket/SocketStatus";
export default {
  name: "st-header",
  components: {
    SocketStatus,
  },
};
</script>

<style>
.v-app-bar .v-toolbar__content {
  height: 50px !important;
}
</style>
