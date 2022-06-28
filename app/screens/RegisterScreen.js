import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import usersApi from "../apis/users";
import authApi from "../apis/auth";
import useAuth from "./../auth/useAuth";
import useApi from "./../hooks/useApi";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const registerAPi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerAPi.request(userInfo);
    const auth = useAuth();

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpeted error occured");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <>
      <AppActivityIndicator visible={registerAPi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCorrect={false}
            icon="account"
            name={"name"}
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title={"Register"} />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
