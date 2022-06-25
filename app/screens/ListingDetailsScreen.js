import React, { useRef } from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";

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
        <Image style={styles.image} source={{ uri: listings.imageUrl }} />
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
