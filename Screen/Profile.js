import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import React from "react";
import ListOfTweets from "../components/ListOfTweets";

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/images/banner.jpg")}
        style={styles.imageBanner}
      />
      <Image
        source={require("../assets/images/hombre-1.jpg")}
        style={styles.imageProfile}
      />
      <View style={styles.profileText}>
        <Text style={styles.profileName}> Facundo Pascale </Text>
        <Text style={styles.profileUserName}> @facupascale </Text>
        <Text style={styles.profileDescription}>
          {" "}
          Adipisicing adipisicing amet magna dolor tempor ipsum irure cupidatat
          consectetur mollit labore nisi magna minim. Esse ex est Lorem amet.
          Culpa commodo laborum aliqua cillum in ullamco.{" "}
        </Text>
        <Text style={styles.profileUserName}> Ubicacion </Text>
        <Text style={styles.profileUserName}> Fecha de nacimiento </Text>
      </View>
      <Text style={styles.tweetTitle}> Tweets </Text>
      <ListOfTweets />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBanner: {
    resizeMode: "cover",
    width: "100%",
    height: "20%",
  },
  imageProfile: {
    position: "absolute",
    resizeMode: "cover",
    width: "20%",
    height: "10%",
    borderRadius: 50,
    marginTop: 110,
    marginLeft: 10,
  },
  profileText: {
    marginTop: 45,
    marginLeft: 10,
    marginRight: 10,
  },
  profileName: {
    fontSize: 23,
    fontFamily: "RobotoBold",
  },
  profileUserName: {
    fontSize: 15,
    fontFamily: "RobotoLightItalic",
    marginVertical: 5,
  },
  profileDescription: {
    fontFamily: "RobotoLight",
    fontSize: 15,
  },
  tweetTitle: {
    fontSize: 18,
    fontFamily: "RobotoBold",
    marginTop: 10,
  },
});

