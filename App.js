import { useEffect, useState } from "react";
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

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click Me!"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="Tweet Details"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: route.params.id.toString(),
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerShown: true,
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
