import React from "react";
import { Platform, SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {/*  TODO: Test on iOS to see if the padding work without View */}
      <View style={Platform.OS === "ios" && style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
