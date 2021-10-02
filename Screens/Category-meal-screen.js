import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealItem } from "../components/MealItem";
import { DummyMeals } from "../data/dummy-data";

export const CategoryMealScreen = ({ route, navigation }) => {
  const { categoryId, title } = route.params;
  navigation.setOptions({ title });
  const displayMeals = DummyMeals.filter(
    (meal) => meal.categoryId.indexOf(categoryId) >= 0
  );
  const renderMealItem = (itemData) => {
    return <MealItem itemData={itemData} onSelectMeal={() => {
      navigation.navigate("MealDetail", {
        mealId: itemData.item.id,
      })
    }} />;
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:10
  },
});
