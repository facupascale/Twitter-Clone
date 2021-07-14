import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ListOfTweets from "../components/ListOfTweets";
import ModalDelete from "../components/ModalDelete";
import TweetInput from "../components/TweetInput";
import ButtonTweet from "../components/ButtonTweet";
export default function Home() {
  const [inputText, setInputText] = useState("");
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const handleOnChange = (text) => {
    setInputText(text);
  };

  const handleAddItem = () => {
    setItemList([
      ...itemList,
      {
        id: Math.random().toString(),
        value: inputText,
      },
    ]);
    setInputText("");
    setTweetVisible(false);
  };

  const handlePressDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };

  const handleVisible = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(true);
  };

  const [tweetVisible, setTweetVisible] = useState(false);
  const handleTweetVisible = () => {
    setTweetVisible(true);
    console.log("funciono");
  };
  // vamos a poner un modal en el tweet input para solucionarlo asi por ahora
  return (
    <SafeAreaView style={styles.container}>
      <ButtonTweet handleTweetVisible={handleTweetVisible} />
      <TweetInput
        inputText={inputText}
        handleOnChange={handleOnChange}
        handleAddItem={handleAddItem}
        tweetVisible={tweetVisible}
      />
      <ListOfTweets itemList={itemList} handleVisible={handleVisible} />
      <ModalDelete
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handlePressDelete={handlePressDelete}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
