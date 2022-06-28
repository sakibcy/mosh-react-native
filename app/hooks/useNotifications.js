import expoPushTokensApi from "../apis/expoPushTokens";
import navigation from "../navigation/rootNavigation";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();
    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotification = async () => {
    try {
      const { granted } = await Notifications.requestPermissionsAsync();
      if (!granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error geting a push token", error);
    }
  };
};
