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
import { loadPlaces} from "../store/actions/items.actions";

export default function ListOfTweets() {
  const tweetImage = useSelector((state) => state.tweets.places)
  const dispatch = useDispatch();

  const handleVisible = (id) => {
    dispatch(deleteVisible(true));
    dispatch(loadPlaces(id));
  };

  return (
    <FlatList
      style={styles.flatContainer}
      data={tweetImage}
      renderItem={(data) => {
        return (
          <View style={styles.containerList}>
            <View >
              <View style={styles.textImage}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/hombre-1.jpg")}
                />
                <Text style={styles.itextDelete}> {data.item.title}  </Text>
                <Image source={{uri: data.item.image}} style={styles.imageFoto} />
                <TouchableOpacity
                  onPress={() => handleVisible(data.item.id)}
                  style={styles.buttonDelete} >
                  <Text style={{color: 'white'}}> X </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.textLocation}> {data.item.address}</Text>
              {console.log(data.item.location, 'TEXT LOCATION')}
            </View>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  flatContainer: {
    width: "100%",
    height: '20%',
    marginTop: 20,
  },
  containerList: {
    width: "100%",
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
  imageFoto: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textImage: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textLocation: {
    fontSize: 10,
    fontFamily: 'RobotoLightItalic',
    color: 'grey',
    opacity: 0.5,
    marginVertical: 10,
    textAlign: 'center',
  }
});
