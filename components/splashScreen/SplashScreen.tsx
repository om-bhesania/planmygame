import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, Image, Text, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { CombinedTheme } from "@/constants/Colors";

SplashScreen.preventAutoHideAsync(); // Prevents the splash screen from auto-hiding

export default function SplashScreenComponent({
  onFinish,
}: {
  onFinish: () => void;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
      SplashScreen.hideAsync(); // Hides the splash screen after loading
      onFinish();
    }, 2000); // Simulating a loading time of 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Welcome to MyApp</Text>
      <ActivityIndicator size="large" color={CombinedTheme.colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1b1b1f",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
});
