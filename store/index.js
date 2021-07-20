import { createStore, combineReducers } from "redux";
import TweetReducer from "./reducers/tweets.reducers";
import TweetVisible from "./reducers/tweetVisible.reducer";
import DeleteReducer from "./reducers/deleteVisible.reducers";
const RootReducer = combineReducers({
  tweets: TweetReducer,
  visible: TweetVisible,
  delete: DeleteReducer,
});

export default createStore(RootReducer);
