import * as types from "./actionTypes";
import * as networthApi from "../../api/networthApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadNetworthSuccess(networth) {
  return { type: types.LOAD_NETWORTH_SUCCESS, networth };
}

export function loadNetworth() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return networthApi
      .getNetworth()
      .then(networth => {
        dispatch(loadNetworthSuccess(networth));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
