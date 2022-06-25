import React, { useState, useEffect } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../apis/listings";
import AppText from "../components/AppText";
import AppButton from "./../components/AppButton";
import AppActivityIndicator from "./../components/AppActivityIndicator";

export default function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrive the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}

      <AppActivityIndicator visible={loading} />

      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            imageUrl={item.images[0].url}
            subTitle={"$" + item.price}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light_gray,
    padding: 20,
  },
});
