import { ScrollView, View } from "react-native";
import Container from "@/components/container/Container";
import DynamicHeader from "@/components/header/Header";
import { CombinedTheme } from "@/constants/Colors";
import { Stack, usePathname } from "expo-router";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "react-native-paper"; 
import SplashScreenComponent from "../components/splashScreen/SplashScreen";

export default function RootLayout() {
  const pathname = usePathname();
  const [hideNav, setHideNav] = useState<boolean>(false);
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    setHideNav(pathname === "/");
  }, [pathname]);

  if (!isAppReady) {
    return <SplashScreenComponent onFinish={() => setIsAppReady(true)} />;
  }

  return (
    <ThemeProvider theme={CombinedTheme}>
      <View style={{ flex: 1 }}>
        {!hideNav && <DynamicHeader />}
        {/* <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 50 ,backgroundColor: CombinedTheme.colors.background}}
          keyboardShouldPersistTaps="always"
        > */}
          <Container>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="about" />
              <Stack.Screen name="(tabs)" />
            </Stack>
          </Container>
        {/* </ScrollView> */}
      </View>
    </ThemeProvider>
  );
}
