import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/contex";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";
import * as Notifications from "expo-notifications";
import { Button } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={() =>
          console.log("There is an error while loading the screen ")
        }
      />
    );

  // const showNotification = () => {
  //   Notifications.presentNotificationAsync({
  //     title: "Congratulation",
  //     body: "Your order was successfully placed!",
  //     data: {
  //       _displayInForeground: true,
  //     },
  //   });
  // };

  return (
    // <Screen>
    //   <Button title="click me" onPress={showNotification} />
    // </Screen>
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
