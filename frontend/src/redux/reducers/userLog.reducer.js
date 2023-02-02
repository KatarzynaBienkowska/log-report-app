import {
  SET_NAME,
  SET_EMAIL,
  SET_LOG,
  SET_SEARCHED_USER,
  SET_FOUND_LOGS,
  CLEAR_LOGS_DATA,
} from "../types/userLog.types";

const defaultState = {
  name: null,
  email: null,
  log: null,
  searchedUser: null,
  foundLogs: [],
};

const main = (state = defaultState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case SET_LOG:
      return {
        ...state,
        log: action.payload,
      };
    case SET_SEARCHED_USER:
      return {
        ...state,
        searchedUser: action.payload,
      };
    case SET_FOUND_LOGS:
      return {
        ...state,
        foundLogs: action.payload,
      };
    case CLEAR_LOGS_DATA:
      return {
        ...state,
        name: "",
        email: "",
        log: "",
      };
    default:
      return { ...state };
  }
};

export default main;
