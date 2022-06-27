import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";

export default function ListingDetailsScreen({ route }) {
  const scrollView = useRef();
  const listings = route.params;

  return (
    <ScrollView
    // ref={scrollView}
    // onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View>
        <Image
          style={styles.image}
          preview={{ uri: listings.images[0].thumbnailUrl }}
          tint="light"
          uri={listings.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listings.title}</AppText>
          <AppText style={styles.price}>{listings.price}</AppText>
          <View style={styles.userConatiner}>
            <ListItem
              image={require("../assets/doraemon.png")}
              title="Doraemon"
              subTitle="5 Listing"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userConatiner: {
    marginVertical: 40,
  },
});
