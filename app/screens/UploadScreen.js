import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

import colors from "../config/colors";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      {progress < 1 ? (
        <View style={styles.container}>
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        </View>
      ) : (
        <LottieView
          autoPlay
          loop={false}
          onAnimationFinish={onDone}
          source={require("../assets/animations/done.json")}
        />
      )}
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
