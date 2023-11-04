import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";

export default disableBackButton = () => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );
      return () => subscription.remove();
    }, [])
  );
};

