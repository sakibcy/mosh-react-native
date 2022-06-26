import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "./../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../apis/listings";
import useLocation from "./../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Desciption"),
  category: Yup.object().required().nullable().label("Category"),
  image: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
];

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listings");
    }

    resetForm();
  };

  return (
    <ScrollView>
      <Screen style={styles.container}>
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
        />
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name={"images"} />
          <AppFormField maxLength={255} name={"title"} placeholder="Title" />
          <AppFormField
            keyboardType="numeric"
            maxLength={8}
            name="price"
            placeholder="Price"
            width={120}
          />
          <AppFormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            pickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            width="50%"
          />
          <AppFormField
            maxLength={255}
            multiline
            name={"description"}
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title={"Post"} />
        </AppForm>
      </Screen>
    </ScrollView>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
