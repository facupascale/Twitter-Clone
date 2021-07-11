import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { ThemeProvider } from "./theme/theme-context";
import AppLoading from "expo-app-loading";
import Constants from "expo-constants";
import NavegationDrawer from "./navegation/NavegationDrawer";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    RobotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    RobotoBoldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
    RobotoLightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <NavegationDrawer />
      </ThemeProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
});

