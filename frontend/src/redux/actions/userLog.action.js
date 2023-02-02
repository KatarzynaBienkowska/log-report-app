import {
  SET_NAME,
  SET_EMAIL,
  SET_LOG,
  SET_SEARCHED_USER,
  SET_FOUND_LOGS,
  CLEAR_LOGS_DATA,
} from "../types/userLog.types";

const setName = (payload) => ({
  type: SET_NAME,
  payload,
});

const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload,
});

const setLog = (payload) => ({
  type: SET_LOG,
  payload,
});

const setSearchedUser = (payload) => ({
  type: SET_SEARCHED_USER,
  payload,
});

const setFoundLogs = (payload) => ({
  type: SET_FOUND_LOGS,
  payload,
});

const clearLogsData = (payload) => ({
  type: CLEAR_LOGS_DATA,
  payload,
});

const actions = {
  setName,
  setEmail,
  setLog,
  setSearchedUser,
  setFoundLogs,
  clearLogsData,
};

export default actions;
