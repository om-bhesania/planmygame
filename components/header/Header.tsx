"use client";

import { useRouter, usePathname } from "expo-router";
import { useState, useEffect } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"; 
import { Colors } from "@/constants/Colors";

const SportsHeader = () => {
  const [title, setTitle] = useState("BookMyGame");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Update title based on current route
    switch (pathname) {
      case "/":
        setTitle("BookMyGame");
        break;
      case "/news":
        setTitle("Sports News");
        break;
      case "/scores":
        setTitle("Live Scores");
        break;
      case "/profile":
        setTitle("My Profile");
        break;
      default:
        setTitle("Sports App");
    }
  }, [pathname]);

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search pressed");
  };

  const handleMenu = () => {
    // Implement menu functionality
    console.log("Menu pressed");
  };

  const styles = StyleSheet.create({
    header: {
      backgroundColor: Colors.backgroundColor,
    },
    title: {
      fontWeight: "bold",
      color: Colors.primary,
    },
    icon: {
      color: Colors.textColor,
    },
  });

  return (
    <Appbar.Header style={styles.header}>
      {pathname !== "/" && (
        <Appbar.BackAction
          onPress={() => router.back()}
          color={Colors.textColor}
        />
      )}
      <Appbar.Content title={title} titleStyle={styles.title} />
      <Appbar.Action
        icon={() => (
          <MaterialCommunityIcons
            name="trophy-outline"
            size={24}
            color={Colors.textColor}
          />
        )}
        onPress={() => alert('test')}
      />
      <Appbar.Action
        icon="magnify"
        color={Colors.textColor}
        onPress={handleSearch}
      />
      <Appbar.Action
        icon="menu"
        color={Colors.textColor}
        onPress={handleMenu}
      />
    </Appbar.Header>
  );
};

export default SportsHeader;
