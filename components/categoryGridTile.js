import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

export const CategoryGridTile = ({ title, color, onSelect }) => {
  let TouchableComp = TouchableOpacity;
  if (Platform.OS == "android") {
    TouchableComp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComp style={{ flex: 1 }} onPress={onSelect}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius:10,
    overflow:'hidden'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "museo-bd",
    fontSize: 20,
  },
});
