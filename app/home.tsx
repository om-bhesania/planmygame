import { View, Text } from "react-native";
import React from "react";
import { ThemedStyles } from "@/constants/ThemedStyles";
import { Link, useNavigation } from "expo-router";
import ThemedText from "@/components/Theme/ThemedText";
import ThemedContainer from "@/components/Theme/ThemedContainer";

const Home = (): React.ReactElement => {
  return (
    <ThemedContainer>
      <ThemedText variant="para">Home</ThemedText>
      <ThemedText variant="para">Home1</ThemedText>
      <ThemedText variant="para">Home2</ThemedText>
      <ThemedText variant="para">Home3</ThemedText>
      <ThemedText variant="para">Home4</ThemedText>
      <ThemedText variant="para">Home5</ThemedText>
    </ThemedContainer>
  );
};

export default Home;
