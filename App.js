import { useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  const [category, setCategory] = useState();

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Cameras", value: 2 },
    { label: "Clothing", value: 3 },
  ];

  return <ListingEditScreen />;
}
