import Container from "@/components/container/Container";
import { Tabs } from "expo-router";
import { ScanFace } from "lucide-react-native";
import React from "react";
const Layout = () => {
  return (
    <Container>
      <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        <Tabs.Screen
          name="login"
          options={{
            title: "Login",
            tabBarIcon: ({ color }) => <ScanFace />,
          }}
        />
        <Tabs.Screen
          name="register"
          options={{
            title: "Register",
            tabBarIcon: ({ color }) => <ScanFace />,
          }}
        />
      </Tabs>
    </Container>
  );
};

export default Layout;
