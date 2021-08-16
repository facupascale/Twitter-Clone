import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import ButtonTweet from "../components/ButtonTweet";
import ListOfTweets from "../components/ListOfTweets";
import ModalDelete from "../components/ModalDelete";
import TweetInput from "../components/TweetInput";
import * as Location from 'expo-location'


export default function Home() {
  const [itemSelected, setItemSelected] = useState({});

  const handlePressDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };

  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if(status !== 'granted')
      {setErrorMsg('Permission to access location was denied');
      return;}
      var result = await Location.getCurrentPositionAsync({});
      setLocation(result)
      console.log(location)
    })();
  }, []);
  
  
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text =  location;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ButtonTweet />
      <TweetInput location={text}/>
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
