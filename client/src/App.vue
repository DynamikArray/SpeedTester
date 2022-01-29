<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Layout/Header";
import { LOGS_FETCH_RECENT } from "@/store/store.constants.js";

export default {
  name: "App",
  components: {
    Header,
  },
  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch(`logs/${LOGS_FETCH_RECENT}`, null, { root: true });
  },
};
</script>

<style>
.shadow {
  text-shadow: #000 2px 2px 1px;
}
.shadow-sm {
  text-shadow: #000 1px 1px 0px;
}
</style>
