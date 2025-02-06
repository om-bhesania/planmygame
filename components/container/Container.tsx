import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { CombinedTheme } from "@/constants/Colors";

const Container = ({ children }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CombinedTheme.colors.backgroundColor, // Background color applied here
  },
  content: {
    flex: 1,
    padding: 16, // Add padding for mobile screens
  },
});

export default Container;
