import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import colors from "../colors/colors";

export default function ListOfTweets({ handleVisible }) {
  const tweetList = useSelector((state) => state.tweets.tweets);

  return (
    <FlatList
      style={styles.flatContainer}
      data={tweetList}
      renderItem={(data) => {
        return (
          <View style={styles.containerList}>
            <Image
              style={styles.image}
              source={require("../assets/images/hombre-1.jpg")}
            />
            <Text style={styles.itextDelete}> {data.item.value} </Text>
            <TouchableOpacity
              onPress={() => handleVisible(data.item.id)}
              style={styles.buttonDelete}
            >
              <Text style={styles.buttonText}> X </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  flatContainer: {
    width: "100%",
    marginTop: 30,
  },
  containerList: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "grey",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  buttonDelete: {
    width: 33,
    height: 40,
    backgroundColor: colors.celeste,
    borderRadius: 5,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textDelete: {
    color: "black",
    fontSize: 20,
    fontFamily: "RobotoLight",
  },
  image: {
    resizeMode: "contain",
    width: "15%",
    height: "60%",
  },
});

