import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Button,
  Platform,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import AppPickerModal from "./AppPickerModal";

export default function AppPicker({
  icon,
  items,
  numberOfColumns = 1,
  placeholder,
  PickerItemComponent = PickerItem,
  onSelectedItem,
  selectedItem,
  width = "100%",
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.conatiner, { width }]}>
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        {Platform.OS === "ios" ? (
          <Screen>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectedItem(item);
                  }}
                />
              )}
            />
          </Screen>
        ) : (
          <View>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              numColumns={numberOfColumns}
              renderItem={({ item }) => (
                <PickerItemComponent
                  item={item}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectedItem(item);
                  }}
                />
              )}
            />
          </View>
        )}
        {/* <AppPickerModal setModalVisible={setModalVisible} items={items} /> */}
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.light_gray,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: defaultStyles.text,
  text: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
