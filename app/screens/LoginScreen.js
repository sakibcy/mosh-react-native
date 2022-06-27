import { Image, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../apis/auth";
import jwtDecode from "jwt-decode";
import AuthContext from "./../auth/contex";
import authStorage from "../auth/storage";
import useAuth from "./../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const response = await authApi.login(email, password);
    if (!response.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth.logIn(response.data);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppErrorMessage
          error={"Invalid email or password"}
          visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name={"email"}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name={"password"}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
