import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ListOfTweets from "../components/ListOfTweets";
import ModalDelete from "../components/ModalDelete";
import TweetInput from "../components/TweetInput";
import ButtonTweet from "../components/ButtonTweet";
export default function Home() {
  const [itemSelected, setItemSelected] = useState({});
  const handlePressDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };
  // vamos a poner un modal en el tweet input para solucionarlo asi por ahora
  return (
    <SafeAreaView style={styles.container}>
      <ButtonTweet />
      <TweetInput />
      <ListOfTweets />
      <ModalDelete handlePressDelete={handlePressDelete} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
});
