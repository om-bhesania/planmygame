"use client";

import { useRouter, usePathname, useNavigation } from "expo-router";
import { useState, useEffect } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import useCheckOs from "@/hooks/useCheckOs";

const SportsHeader = () => {
  const [title, setTitle] = useState("BookMyGame");
  const pathname = usePathname();
  const router = useRouter();
  const navigation: any = useNavigation();
  const initialStepsCompleted =
    navigation.getState().routes?.[0]?.params?.initialStepsCompleted ?? true;

  useEffect(() => {
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
    console.log("Search pressed");
  };

  const handleMenu = () => {
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
const {os} = useCheckOs();
  return (
    <Appbar.Header style={styles.header}>
      {pathname !== "/home" ? (
        <>
          <Appbar.BackAction
            onPress={() => router.back()}
            color={Colors.textColor}
          />
          <Appbar.Content title={title} titleStyle={styles.title} />
        </>
      ) : (
        <Appbar.Content
          title={title}
          titleStyle={styles.title}
          style={{
            margin: 0,
            padding: 0,
            marginLeft: os === "ios" ? -90 : 16,
          }}
        />
      )}

      <Appbar.Action
        icon={() => (
          <MaterialCommunityIcons
            name="trophy-outline"
            size={24}
            color={Colors.textColor}
          />
        )}
        onPress={() => alert("test")}
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
