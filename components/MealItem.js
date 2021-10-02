import React from "react";
import {
  FlatList,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";

export const MealItem = ({ itemData, onSelectMeal }) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS == "android") {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.mealItem}>
      <TouchableComp onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: itemData.item.imageUrl }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>{itemData.item.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{itemData.item.duration}mins</Text>
            <Text>{itemData.item.complexity.toUpperCase()}</Text>
            <Text>{itemData.item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    backgroundColor: "#f5f5f5",
    width: "100%",
    borderRadius:10,
    overflow:"hidden",
    // marginBottom:20
  },
  mealRow: {
    flexDirection: "row",
  },
  mealDetail: {
    height: "20%",
    display: "flex",
    justifyContent: "space-between",
    textAlign:'center',
    height:'15%'
  },
  mealHeader: {
    height: "85%",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent:'flex-end'
  },
  title: {
    fontFamily: "museo-bd",
    fontSize: 21,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 5,
    textAlign:'center'
  },
});
