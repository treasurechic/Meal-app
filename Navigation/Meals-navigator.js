import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryMealScreen } from "../Screens/Category-meal-screen";
import { CategoryScreen } from "../Screens/Category-screen";
import { MealDetailsScreen } from "../Screens/Meal-details-screen";
import colors from "../constants/colors";
import { Platform } from "react-native";

const MealsNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === "android" ? colors.primaryColor : "",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor:
            Platform.OS === "android" ? "white" : colors.primaryColor,
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoryScreen}
          options={{ 
            title: "Meal Categories",
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          options={({ route }) => ({ title: route.params.name })}
          component={CategoryMealScreen}
        />
        <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
