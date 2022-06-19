import { View, Text, Platform, Button, FlatList } from "react-native";
import React from "react";
import PickerItem from "./PickerItem";
import Screen from "./Screen";

const AppPickerModal = ({ setModalVisible, items }) => {
  return (
    <>
      {Platform.OS === "ios" ? (
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => <PickerItem label={item.label} />}
          />
        </Screen>
      ) : (
        <View>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => <PickerItem label={item.label} />}
          />
        </View>
      )}
    </>
  );
};

export default AppPickerModal;
