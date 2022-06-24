import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  //The useIsFocused hook will cause our component to re-render when we focus and unfocus a screen.

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
  // are we currently focused on the nav bar?
};

export default FocusedStatusBar;
