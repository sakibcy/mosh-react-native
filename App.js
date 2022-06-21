import { useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import MessagesScreen from "./app/screens/MessagesScreen";
import AppFormPicker from "./app/components/forms/AppFormPicker";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [category, setCategory] = useState();

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Cameras", value: 2 },
    { label: "Clothing", value: 3 },
  ];

  return <ListingEditScreen />;
}
