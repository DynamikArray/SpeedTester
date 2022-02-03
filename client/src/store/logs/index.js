import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import {
  //mutations
  LOGS_RESULTS,
  LOGS_LOADING,
  //actions
  LOGS_FETCH_RECENT,
  MAKE_API_CALL,
} from "../store.constants";

const logs = {
  namespaced: true,
  state: {
    items: [],
    stats: false,
    loading: false,
  },
  getters: {
    getStats: (state) => {
      return state.stats;
    },
    getResults: (state) => {
      return state.items;
    },
  },
  mutations: {
    [LOGS_LOADING](state, { loading }) {
      state.loading = loading;
    },
    [LOGS_RESULTS](state, { stats, results }) {
      state.items = results;
      state.stats = stats;
    },
  },
  actions: {
    async [LOGS_FETCH_RECENT]({ commit, dispatch }) {
      const result = await dispatch(
        `api/${MAKE_API_CALL}`,
        {
          method: "get",
          url: "/logs/",
          loading: `logs/${LOGS_LOADING}`,
        },
        { root: true }
      );
      if (result.data)
        commit(`logs/${LOGS_RESULTS}`, result.data, { root: true });
    },
  },
};

export default logs;
