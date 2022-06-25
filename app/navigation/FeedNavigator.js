import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingsScreen from "./../screens/ListingsScreen";
import ListingDetailsScreen from "./../screens/ListingDetailsScreen";
import routes from "./routes";

const Stack = createNativeStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ animation: "fade_from_bottom" }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LISTING_DETAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);
