import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import colors from "../colors/colors";
import { tweetVisible } from "../store/actions/tweetVisible.actions";
import { useDispatch } from "react-redux";

export default function ButtonTweet() {
  const dispatch = useDispatch();

  const handleTweetVisible = () => {
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
    bottom: '14%',
    backgroundColor: colors.azulMarino,
    borderRadius: 50,
    width: '90%',
    height: '5%',
    justifyContent: "center",
    alignItems: "center",
    alignSelf: 'center',
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
