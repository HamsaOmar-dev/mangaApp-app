import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Search = () => {
  return (
    <View style={styles.search}>
      <Header title="Search" />
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          // value={query}
          // onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          placeholderTextColor="#FFFFFF"
          style={styles.searchBox}
        />
      </View>
      <Navbar />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16151D",
    height: "75.5%",
    alignItems: "center",
  },
  searchBox: {
    marginTop: 10,
    backgroundColor: "#232029",
    width: "70%",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: "20%",
    padding: 10,
    color: "#FFFFFF",
  },
});
