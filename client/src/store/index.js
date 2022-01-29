import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import api from "./api";
import logs from "./logs";

import { LOGS_FETCH_RECENT } from "@/store/store.constants.js";

export default new Vuex.Store({
  modules: {
    api,
    logs,
  },
  state: {
    socketStatus: false,
    socketStatusMessage: false,
    speedTestEventData: false,
    speedTestEventTestStartData: false,
    speedTestEventDownloadData: false,
    speedTestEventUploadData: false,
    isSpeedTestRunning: false,
    speedTestResults: false,
  },
  getters: {
    getSocketStatus: (state) => {
      return state.socketStatus;
    },
    getSocketStatusMessage: (state) => {
      return state.socketStatusMessage;
    },
    getSpeedTestEventData: (state) => {
      return state.speedTestEventData;
    },
    getIsSpeedTestRunning: (state) => {
      return state.isSpeedTestRunning;
    },
    getSpeedTestResults: (state) => {
      return state.speedTestResults;
    },
  },
  mutations: {
    clearSpeedTestResults(state) {
      state.speedTestResults = false;
      state.speedTestEventData = false;
    },
    SOCKET_STATUS(state, val) {
      state.socketStatus = val;
    },
    SOCKET_STATUS_MESSAGE(state, val) {
      state.socketStatusMessage = val;
    },
    SOCKET_PROGRESS_EVENT(state, data) {
      switch (data.type) {
        case "testStart":
          state.speedTestEventTestStartData = data;
          break;
        case "download":
          state.speedTestEventDownloadData = data;
          break;
        case "upload":
          state.speedTestEventUploadData = data;
          break;
      }
      state.speedTestEventData = data;
    },
    SOCKET_RUNNING_SPEEDTEST_EVENT(state, { isRunning }) {
      state.isSpeedTestRunning = isRunning;
      if (isRunning) state.speedTestResults = false;
    },
    SOCKET_FINISHED_SPEEDTEST_EVENT(state, data) {
      state.speedTestResults = { ...data };
    },
  },
  actions: {
    socket_connect({ commit }) {
      commit("SOCKET_STATUS", true);
    },
    socket_disconnect({ commit }, reason) {
      commit("SOCKET_STATUS", false);
      commit("SOCKET_STATUS_MESSAGE", reason);
    },
    socket_startSpeedTest({ commit }) {
      commit("clearSpeedTestResults");
      this._vm.$socket.client.emit("startSpeedTest", { start: true });
    },
    socket_finishedSpeedtestEvent({ dispatch }) {
      //commit("SOCKET_FINISHED_SPEEDTEST_EVENT", data);
      dispatch(`logs/${LOGS_FETCH_RECENT}`);
    },
  },
});
