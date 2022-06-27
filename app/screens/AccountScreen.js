import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Icon from "./../components/Icon";
import ListItemSeparator from "./../components/lists/ListItemSeparator";
import AuthContext from "./../auth/contex";

const menuItem = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

export default function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/doraemon.png")}
          style={{ backgroundColor: colors.white }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              style={{ backgroundColor: colors.white }}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={<Icon name={"logout"} backgroundColor="#048bfc" />}
        onPress={() => setUser(null)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light_gray,
  },
});
