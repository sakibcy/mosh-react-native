import * as SecureStorage from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStorage.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error while storing token ", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    return await SecureStorage.getItemAsync(key);
  } catch (error) {
    console.log("Error while getting token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStorage.deleteItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

export default { storeToken, getUser, removeToken };
