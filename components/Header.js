import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContext } from "@react-navigation/native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#913fe2",
    paddingTop: 50,
    paddingBottom: 10,
    borderWidth: 1,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
