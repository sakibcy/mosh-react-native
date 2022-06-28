import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

export default function AppActivityIndicator({ visible }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        style={{
          width: 300,
          height: 300,
        }}
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "white",
    position: "absolute",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});
