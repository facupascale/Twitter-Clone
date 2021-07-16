import { ADD_TWEET } from "../actions/items.actions";

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
    default:
      return state;
  }
};
export default TweetReducer;
