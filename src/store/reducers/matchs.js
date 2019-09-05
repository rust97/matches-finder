import {
  FIND_MATCH,
  FIND_MATCH_SUCCEEDED,
  ADD_MATCH,
  REMOVE_MATCH,
  POST_DATA,
  POST_DATA_SUCCEEDED
} from "../constants";

const initialState = {
  isLoading: false,
  searcheRsults: {},
  allMatches: []
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case FIND_MATCH:
      return {
        ...state,
        isLoading: true
      };
    case FIND_MATCH_SUCCEEDED:
      return {
        ...state,
        searcheRsults: action.match,
        isLoading: false
      };
    case ADD_MATCH:
      return {
        ...state,
        allMatches: [...state.allMatches, action.match]
      };
    case REMOVE_MATCH:
      return {
        ...state,
        allMatches: [
          ...state.allMatches.slice(0, action.idx),
          ...state.allMatches.slice(action.idx + 1)
        ]
      };
    case POST_DATA:
      return {
        ...state,
        isLoading: true
      };
    case POST_DATA_SUCCEEDED:
      return {
        ...state,
        searcheRsults: {},
        isLoading: false
      };
    default:
      return state;
  }
}
