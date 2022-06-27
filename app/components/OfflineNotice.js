import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";

import AppText from "./AppText";
import Screen from "./Screen";
import colors from "../config/colors";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet Connection</AppText>
      </View>
    );
  }

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 50,
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
