import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CategoryGridTile } from "../components/categoryGridTile";
import { DummyCategory } from "../data/dummy-data";

export const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        props={props}
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };
  return (
    <FlatList data={DummyCategory} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
