import { ThemedStyles } from "@/constants/ColoredStyle";
import { CombinedTheme } from "@/constants/Colors";
import { LandingImage, Logo } from "@/constants/Icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TrophyIcon } from "lucide-react-native";
import AnimatedLandingImage from "@/constants/AnimatedLandingImage";
import { Button, Drawer } from "react-native-paper";
import CustomButton from "@/components/button/CustomButton";
import { useState } from "react";

export default function StepOne() {
  const [active, setActive] = useState("");
  return (
    <View
      style={[
        ThemedStyles.container,
        { flex: 1, justifyContent: "space-between", gap: 50 },
      ]}
    >
      {/* <Logo height={90} width={90} /> */}
      <Text
        style={[
          ThemedStyles.themedTextPrimary,
          {
            fontWeight: 900,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <TrophyIcon /> PlaneMyGame
      </Text>
      <View
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AnimatedLandingImage />
        <View
          style={{
            height: "100%",
            flex: 1,
            alignItems: "center",
            gap: 10,
            width: "100%",
          }}
        >
          <Text
            style={[ThemedStyles.themedTextPrimary, { textAlign: "center" }]}
          >
            Easy Booking
          </Text>
          <Text style={ThemedStyles.themedTextHelper}>
            Easy BookingBook sport turf time slots with just a few steps No more
            waitings
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginTop: 50,
          }}
        >
          <CustomButton
            mode="contained"
            style={{
              flexShrink: 0,
              marginTop: 20,
            }}
          >
            Lets Get Started
          </CustomButton>

          <Link href={"/"} style={{ color: "white" }}>
            Already have an account?{" "}
            <Text style={{ color: CombinedTheme.colors.primary }}>Log in</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
