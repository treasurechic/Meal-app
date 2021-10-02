import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButton } from "../components/HeaderButton";
import { DummyMeals } from "../data/dummy-data";

export const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const selectedMeal = DummyMeals.find((meal) => meal.id == mealId);
  navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButton onPress={() => console.log("object")}/>
    ),
  });
  return (
    <View style={styles.screen}>
      <Text> meal detail screen</Text>
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
