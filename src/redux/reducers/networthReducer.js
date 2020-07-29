import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function networthReducer(state = initialState.networth, action) {
  switch (action.type) {
    case types.LOAD_NETWORTH_SUCCESS:
      return action.networth;
    default:
      return state;
  }
}
