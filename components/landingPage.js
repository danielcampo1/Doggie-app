import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function landingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.containter}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/cover-photo.png")}
      >
        <TouchableOpacity style={styles.overlayButton}>
          <Text style={styles.overlayText}>
            Welcome,
            {"\n"} let's find you a dog friendly area!
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },
  image: {
    width: 415,
    height: 950,
    position: "absolute",
  },
  overlayButton: {
    position: "relative",
    top: 25,
    padding: "12%",
  },
  overlayText: {
    fontSize: 30,
    color: "#0b0c0f",
    textAlign: "center",
    borderWidth: 2,
    backgroundColor: "#e4e6ec",
    opacity: 0.5,
  },
});
