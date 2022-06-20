import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import AppErrorMessage from "./AppErrorMessage";

export default function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
