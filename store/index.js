import { applyMiddleware, combineReducers, createStore } from "redux";

import AuthReducer from "./reducers/auth.reducer";
import DeleteReducer from "./reducers/deleteVisible.reducers";
import TweetReducer from "./reducers/tweets.reducers";
import TweetVisible from "./reducers/tweetVisible.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  tweets: TweetReducer,
  visible: TweetVisible,
  delete: DeleteReducer,
  auth: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
