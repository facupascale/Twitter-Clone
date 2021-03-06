import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import colors from "../colors/colors";
import { useDispatch, useSelector } from "react-redux";
import { addTweet } from "../store/actions/items.actions";
import { tweetInvisible } from "../store/actions/tweetVisible.actions";
import ImageSelector from "./ImageSelector";
import { addPlace } from "../store/actions/items.actions";

export default function TweetInput(props) {
  const {location} = props
  const visible = useSelector((state) => state.visible.visible);
  const [inputText, setInputText] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (inputText) {;
      dispatch(tweetInvisible(false)); 
      dispatch(addPlace(selectedImage, inputText, location))
      setInputText("")
      setInputError("") 
    } else {
      setInputError("Required");
    }
  };

  const handleOnChange = (text) => {
    setInputText(text);
    setInputError("");
  };

  const [selectedImage, setSelectedImage] = useState('');
  const onHandlerImage = path => {setSelectedImage(path)};


  return (
    <Modal animationType="slide" 
      visible={visible} 
      transparent={true}
      onRequestClose={() => {
        dispatch(tweetInvisible(false));
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/hombre-1.jpg")}
          />
          <TextInput
            placeholder="Whats new...?"
            style={styles.input}
            textAlign={"left"}
            value={inputText}
            onChangeText={handleOnChange}
          />
            <ImageSelector onImage={onHandlerImage} handleAddItem={handleAddItem}/>
        </View>
        <Text style={styles.inputError}> {inputError}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  inputContainer: {
    borderRadius: 30,
    flexDirection: "row",
    width: "90%",
    height: 90,
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
  },
  input: {
    width: '40%',
    height: '50%',
  },
  buttonInput: {
    borderRadius: 10,
    backgroundColor: colors.celeste,
    height: 30,
    justifyContent: "center",
    width: 60,
    marginTop: 5,
  },
  image: {
    resizeMode: "contain",
    width: "15%",
    height: "60%",
  },
  inputError: {
    color: "red",
  },
});
