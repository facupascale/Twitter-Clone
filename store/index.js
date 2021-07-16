import { createStore, combineReducers } from "redux";
import TweetReducer from "./reducers/tweets.reducers";
import TweetVisible from "./reducers/tweetVisible.reducer";

const RootReducer = combineReducers({
  tweets: TweetReducer,
  visible: TweetVisible,
});

export default createStore(RootReducer);
