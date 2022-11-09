import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
  Pressable,
  Linking,
} from "react-native";
import axios from "axios";

import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  const [mangaList, setMangaList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMangaList() {
    await axios
      .get("http://192.168.1.171:5000/")
      .then((data) => {
        setMangaList(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMangaList();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="AsuraScans" />
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.list}>
          <FlatList
            ListHeaderComponent={() => (
              <Text style={styles.headlineText}>Latest</Text>
            )}
            data={mangaList}
            renderItem={(itemData) => {
              return (
                <View style={styles.listItem} key={itemData.index}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: itemData.item.image,
                    }}
                  />
                  <View style={styles.chapterContainer}>
                    <Pressable
                      onPress={() => {
                        Linking.openURL(itemData.item.link);
                      }}
                    >
                      <Text style={styles.text}>{itemData.item.title}</Text>
                    </Pressable>
                    <View style={styles.chapterListContainer}>
                      {JSON.parse(itemData.item.latestChapters).map(
                        (chapterInfo, index) => {
                          return (
                            <View>
                              <Pressable
                                onPress={() => {
                                  Linking.openURL(chapterInfo.link);
                                }}
                              >
                                <View style={styles.chapterTextContainer}>
                                  <Text style={styles.chapterText} key={index}>
                                    {chapterInfo.chapter.slice(0, 12)}
                                  </Text>
                                  <Text
                                    style={styles.chapterText}
                                    key={index + 4}
                                  >
                                    {chapterInfo.time}
                                  </Text>
                                </View>
                              </Pressable>
                            </View>
                          );
                        }
                      )}
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
      {/* <Navbar /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#16151D",
    height: "100%",
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    padding: 5,
    borderWidth: 1,
    borderColor: "#913fe2",
    borderRadius: "15%",
  },
  headlineText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },
  list: {
    height: "85%",
    paddingHorizontal: 20,
  },
  listItem: {
    margin: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 143,
  },
  chapterText: {
    color: "#FFFFFF",
    paddingHorizontal: 20,
  },
  chapterContainer: {
    width: "71%",
    marginLeft: 5,
  },
  chapterTextContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#913fe2",
    borderRadius: "10%",
  },
  chapterListContainer: {
    paddingTop: 10,
  },
});
