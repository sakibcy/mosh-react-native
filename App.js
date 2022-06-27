import React, { useEffect, useState } from "react";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import MessagesScreen from "./app/screens/MessagesScreen";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import AppPicker from "./app/components/AppPicker";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, Text } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/contex";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

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

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
