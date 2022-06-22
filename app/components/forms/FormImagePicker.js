import React from "react";
import ImageInputList from "../ImageInputList";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
