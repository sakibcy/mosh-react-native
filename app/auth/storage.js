import * as SecureStorage from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStorage.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error while storing token ", error);
  }
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

export default { storeToken, getToken, removeToken };
