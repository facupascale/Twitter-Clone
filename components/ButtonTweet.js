import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../colors/colors";
import { tweetVisible } from "../store/actions/tweetVisible.actions";

export default function ButtonTweet() {
  const dispatch = useDispatch();

  const handleTweetVisible = () => {
    console.log("me tocaste");
    dispatch(tweetVisible(true));
  };

  return (
    <TouchableOpacity onPress={handleTweetVisible} style={styles.button}>
      <Text style={styles.text}> + </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: colors.azulMarino,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontFamily: "RobotoBold",
    fontSize: 20,
    color: "white",
  },
});
