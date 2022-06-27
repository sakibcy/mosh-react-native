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
import useApi from "./../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request(1, 2, 3);
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <>
          <AppText>Couldn't retrive the listings</AppText>
          <AppButton title="Retry" onPress={getListingsApi.request()} />
        </>
      )}

      <AppActivityIndicator visible={getListingsApi.loading} />

      <FlatList
        data={getListingsApi.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            imageUrl={item.images[0].url}
            subTitle={"$" + item.price}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
