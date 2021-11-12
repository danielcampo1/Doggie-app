import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";

function maps() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
}

function landingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.containter}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/cover-photo.png")}
      >
        <TouchableOpacity
          style={styles.overlayButton}
          onPress={() => navigation.navigate("maps")}
        >
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="landing page"
          component={landingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="maps"
          component={maps}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
