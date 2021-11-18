import * as React from "react";
import MapView from "react-native-maps";
import { StatusBar } from "expo-status-bar";
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
    <SafeAreaView style={styles.containerMaps}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={MapView.PROVIDER_GOOGLE}
        region={{
          latitude: 30.2672,
          longitude: -97.7431,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}
      ></MapView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function landingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.containterLanding}>
      <ImageBackground
        style={styles.imageLanding}
        source={require("./assets/cover-photo.png")}
      >
        <TouchableOpacity
          style={styles.overlayButtonLanding}
          onPress={() => navigation.navigate("maps")}
        >
          <Text style={styles.overlayTextLanding}>
            Welcome,
            {"\n"} let's find you a dog friendly area!
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containterLanding: {
    flex: 1,
  },
  imageLanding: {
    width: 415,
    height: 950,
    position: "absolute",
  },
  overlayButtonLanding: {
    position: "relative",
    top: 25,
    padding: "12%",
  },
  overlayTextLanding: {
    fontSize: 30,
    color: "#0b0c0f",
    textAlign: "center",
    borderWidth: 2,
    backgroundColor: "#e4e6ec",
    opacity: 0.5,
  },
  containerMaps: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
