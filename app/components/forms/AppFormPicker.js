import React from "react";
import AppPicker from "../AppPicker";
import { useFormikContext } from "formik";
import AppErrorMessage from "./AppErrorMessage";

export default function AppFormPicker({
  items,
  width,
  name,
  numberOfColumns,
  placeholder,
  pickerItemComponent,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectedItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        pickerItemComponent={pickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
