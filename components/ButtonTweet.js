import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import colors from "../colors/colors";
export default function ButtonTweet({ handleTweetVisible }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTweetVisible} style={styles.button}>
        <Text style={styles.text}> + </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  button: {
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
