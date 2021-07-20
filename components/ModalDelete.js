import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import colors from "../colors/colors";
import { useDispatch, useSelector } from "react-redux";
import { deleteInvisible } from "../store/actions/deleteVisible.actions";
import { deletedTweet } from "../store/actions/items.actions";
export default function ModalDelete() {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.delete.delete);
  const handlePressDelete = () => {
    dispatch(deleteInvisible(false));
    dispatch(deletedTweet(selected.id));
  };
  const selected = useSelector((state) => state.tweets.selected) || {};

  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalMessage}> Are you sure ? </Text>
          <Text style={styles.modalTitle}> {selected.value} </Text>
          <TouchableOpacity
            onPress={handlePressDelete}
            style={styles.buttonConfirm}
          >
            <Text style={styles.confirm}> Delete </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    width: 300,
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    padding: 30,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalMessage: {
    fontSize: 18,
    fontFamily: "RobotoBold",
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    fontFamily: "RobotoLightItalic",
  },
  buttonConfirm: {
    backgroundColor: colors.celeste,
    width: 80,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
  },
  confirm: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    fontFamily: "RobotoLight",
  },
});
