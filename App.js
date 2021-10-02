import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./Navigation/Meals-navigator";

const fetchFonts = () => {
  return font.loadAsync({
    "museo-lt": require("./assets/fonts/MuseoSans-300.otf"),
    "museo-rg": require("./assets/fonts/MuseoSans_500.otf"),
    "museo-md": require("./assets/fonts/MuseoSans-500 400.otf"),
    "museo-bd": require("./assets/fonts/MuseoSans_700.otf"),
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
