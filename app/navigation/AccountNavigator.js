import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "./../screens/AccountScreen";
import MessagesScreen from "./../screens/MessagesScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      animation: "fade_from_bottom",
    }}
  >
    <Stack.Screen
      name={routes.ACCOUNT}
      component={AccountScreen}
      //   options={{ headerShown: true }}
    />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);
