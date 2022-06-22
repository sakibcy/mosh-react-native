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
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAddImage = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
    </Screen>
  );
}
