import { combineReducers } from "redux";
import networth from "./networthReducer";
import holdings from "./holdingsReducer";
import apiCallInProgress from "./apiStatusReducer";

const rootreducer = combineReducers({
  networth,
  holdings,
  apiCallInProgress
});

export default rootreducer;
