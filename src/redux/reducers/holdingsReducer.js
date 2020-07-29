import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function holdingsReducer(state = initialState.holdings, action) {
  switch (action.type) {
    case types.LOAD_HOLDINGS_SUCCESS:
      return action.holdings;
    default:
      return state;
  }
}
