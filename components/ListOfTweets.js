import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import colors from "../colors/colors";
import { deleteVisible } from "../store/actions/deleteVisible.actions";
import { selectedTweet } from "../store/actions/items.actions";

export default function ListOfTweets() {
  const tweetList = useSelector((state) => state.tweets.tweets)
  const tweetImage = useSelector((state) => state.tweets.places.newPlace)
  const dispatch = useDispatch();

  const handleVisible = (id) => {
    dispatch(deleteVisible(true));
    dispatch(selectedTweet(id));
  };

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
            <Image source={tweetImage} />
            <Text style={styles.itextDelete}> {data.item.value} </Text>
            <TouchableOpacity
              onPress={() => handleVisible(data.item.id)}
              style={styles.buttonDelete}
            >
              <Text style={{color: 'white'}}> X </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  flatContainer: {
    width: "100%",
    marginTop: 20,
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
    width: 35,
    height: 35,
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
