import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as holdingsApi from "../../api/holdingsApi";

export function loadHoldingsSuccess(holdings) {
  return { type: types.LOAD_HOLDINGS_SUCCESS, holdings };
}

export function loadHoldings() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return holdingsApi
      .getHoldings()
      .then(holdings => {
        dispatch(loadHoldingsSuccess(holdings.payload));
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
