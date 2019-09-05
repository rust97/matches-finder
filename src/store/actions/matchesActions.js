import { Api } from "../../services/api";
import {
  FIND_MATCH,
  FIND_MATCH_SUCCEEDED,
  ADD_MATCH,
  REMOVE_MATCH,
  POST_DATA,
  POST_DATA_SUCCEEDED
} from "../constants";

export function searchMatch(obj) {
  return async dispatch => {
    dispatch({
      type: FIND_MATCH
    });
    const match = await Api.getMatchParams(obj);
    dispatch({
      type: FIND_MATCH_SUCCEEDED,
      match
    });
  };
}

export function addMatch(match) {
  return {
    type: ADD_MATCH,
    match
  };
}
