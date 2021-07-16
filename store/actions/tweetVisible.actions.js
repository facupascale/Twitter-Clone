export const TWEET_VISIBLE = "TWEET_VISIBLE";
export const TWEET_INVISBLE = "TWEET_INVISBLE";

export const tweetVisible = (tweet) => ({
  type: TWEET_VISIBLE,
  payload: tweet,
});
export const tweetInvisible = (tweet) => ({
  type: TWEET_INVISBLE,
  payload: tweet,
});
