import React from "react";
import LottieView from "lottie-react-native";

export default function AppActivityIndicator({ visible }) {
  if (!visible) return null;

  return (
    <LottieView
      style={{
        width: 300,
        height: 300,
      }}
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}
