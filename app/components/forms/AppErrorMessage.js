import { StyleSheet } from "react-native";
import React from "react";
import AppText from "../AppText";

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <AppText style={styles.text}>{error}</AppText>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
