import Vue from "vue";
import store from "../store";

import config from "../../vue.config.js";

import VueSocketIOExt from "vue-socket.io-extended";
import io from "socket.io-client";

const socket = io(config.socketUrl);

Vue.use(VueSocketIOExt, socket, { store });
