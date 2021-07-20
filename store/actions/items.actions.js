export const ADD_TWEET = "ADD_TWEET";
export const SELECTED_TWEET = "SELECTED_TWEET";
export const DELETED_TWEET = "DELETED_TWEET";
export const addTweet = (tweet) => ({
  type: ADD_TWEET,
  payload: tweet,
});
export const selectedTweet = (tweet) => ({
  type: SELECTED_TWEET,
  payload: tweet,
});
export const deletedTweet = (tweet) => ({
  type: DELETED_TWEET,
  payload: tweet,
});
