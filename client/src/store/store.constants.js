const ACTION_TYPES = {
  MAKE_API_CALL: "MAKE_API_CALL",
  LOGS_FETCH_RECENT: "LOGS_FETCH_RECENT",
};

//actions
const MUTATION_TYPES = {
  ADD_API_CALL: "ADD_API_CALL",
  REMOVE_API_CALL: "REMOVE_API_CALL",
  LOGS_RESULTS: "LOGS_RESULTS",
  LOGS_LOADING: "LOGS_LOADING",
};

module.exports = { ...ACTION_TYPES, ...MUTATION_TYPES };
