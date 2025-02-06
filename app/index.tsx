import { ThemedStyles } from "@/constants/ColoredStyle";
import { CombinedTheme } from "@/constants/Colors";
import { LandingImage, Logo } from "@/constants/Icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TrophyIcon } from "lucide-react-native";
import AnimatedLandingImage from "@/constants/AnimatedLandingImage";
import { Button } from "react-native-paper";
import CustomButton from "@/components/button/CustomButton";
import StepOne from "@/onBoardingProcess/Step1";

export default function Index() {
  return <StepOne />;
}
