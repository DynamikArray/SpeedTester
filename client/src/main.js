import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import("./plugins/vueSocketIo");

import { format } from "date-fns";

import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.filter("convertToMegabits", (bytes) => {
  const megaBits = parseFloat(bytes / 125000);
  const formatted = +megaBits.toFixed(2);
  return formatted;
});

Vue.filter("formatDateTime", (timestamp) => {
  return format(new Date(timestamp), "MMM dd, yyyy  hh:mm a");
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
