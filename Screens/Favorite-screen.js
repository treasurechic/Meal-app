import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FavoriteScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The favorites screen</Text>
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
