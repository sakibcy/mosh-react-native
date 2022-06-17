import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import ListItem from "./ListItem";
import Screen from "./Screen";
import ListItemSeparator from "./ListItemSeparator";

console.log(Constants);

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/doraemon.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/doraemon.png"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
