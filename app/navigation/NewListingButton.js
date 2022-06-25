import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    backgroundColor: colors.primary,
    bottom: 20,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
