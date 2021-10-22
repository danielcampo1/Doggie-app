import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.containter}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/cover-photo.png")}
      >
        <Text styles={styles.overlayText}>Hello World how are you!</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 415,
    height: 950,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {},
});
