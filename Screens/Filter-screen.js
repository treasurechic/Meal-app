import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Filter screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
