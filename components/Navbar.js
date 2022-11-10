// import React from "react";
// import { StyleSheet, Text, View, Image, Pressable } from "react-native";
// import { NavigationContext } from "@react-navigation/native";

// const Navbar = () => {
//   const navigation = React.useContext(NavigationContext);

//   return (
//     <View style={styles.navbar}>
//       <Pressable onPress={() => navigation.navigate("Home")}>
//         <View style={styles.container}>
//           <Image
//             style={styles.image}
//             source={require("../assets/homeicon.png")}
//           />
//           <Text style={styles.text}>Home</Text>
//         </View>
//       </Pressable>
//       <Pressable onPress={() => navigation.navigate("Search")}>
//         <View style={styles.container}>
//           <Image
//             style={styles.image}
//             source={require("../assets/searchicon.png")}
//           />
//           <Text style={styles.text}>Search</Text>
//         </View>
//       </Pressable>
//       <Pressable>
//         <View style={styles.container}>
//           <Image
//             style={styles.image}
//             source={require("../assets/bookmarkicon.png")}
//           />
//           <Text style={styles.text}>Bookmark</Text>
//         </View>
//       </Pressable>
//       <Pressable>
//         <View style={styles.container}>
//           <Image
//             style={styles.image}
//             source={require("../assets/profileicon.png")}
//           />
//           <Text style={styles.text}>Profile</Text>
//         </View>
//       </Pressable>
//     </View>
//   );
// };

// export default Navbar;

// const styles = StyleSheet.create({
//   navbar: {
//     height: "20%",
//     width: "100%",
//     paddingTop: 5,
//     paddingHorizontal: 20,
//     backgroundColor: "#913fe2",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   text: {
//     color: "#FFFFFF",
//   },
//   image: {
//     width: 30,
//     height: 30,
//   },
//   container: {
//     alignItems: "center",
//   },
// });
