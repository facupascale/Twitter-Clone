import {
  ADD_TWEET,
  DELETED_TWEET,
  SELECTED_TWEET,
} from "../actions/items.actions";

const INITIAL_STATE = {
  tweets: [],
  selected: null,
};

const TweetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: state.tweets.concat(action.payload),
      };
    case SELECTED_TWEET:
      return {
        ...state,
        selected: state.tweets.find((item) => item.id === action.payload),
      };
    case DELETED_TWEET:
      return {
        ...state,
        tweets: state.tweets.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default TweetReducer;
