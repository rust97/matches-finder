import { Api } from "../../services/api";
import {
  FIND_MATCH,
  FIND_MATCH_SUCCEEDED,
  ADD_MATCH,
  REMOVE_MATCH,
  POST_DATA,
  POST_DATA_SUCCEEDED,
  GET_ALL_MATCHES
} from "../constants";

export function searchMatch(obj) {
  const { url } = obj;
  return async dispatch => {
    dispatch({
      type: FIND_MATCH
    });
    const match = await Api.getMatchParams(obj);
    dispatch({
      type: FIND_MATCH_SUCCEEDED,
      match,
      url
    });
  };
}

export function addMatch() {
  return {
    type: ADD_MATCH
  };
}

export function postData(match) {
  return dispatch => {
    dispatch({
      type: POST_DATA,
      match
    });
    dispatch({
      type: POST_DATA_SUCCEEDED
    });
  };
}

export function getAllMatches(matches) {
  return {
    type: GET_ALL_MATCHES,
    matches
  };
}

export function removeMatch(idx) {
  return {
    type: REMOVE_MATCH,
    idx
  };
}
