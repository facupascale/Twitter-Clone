import { TWEET_VISIBLE } from "../actions/tweetVisible.actions";
import { TWEET_INVISBLE } from "../actions/tweetVisible.actions";

const INITIAL_STATE = {
  visible: false,
};

const TweetVisible = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TWEET_VISIBLE:
      return {
        ...state,
        visible: action.payload,
      };
    case TWEET_INVISBLE:
      return {
        ...state,
        visible: action.payload,
      };
    default:
      return state;
  }
};
export default TweetVisible;
