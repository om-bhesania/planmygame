import { View } from "lucide-react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "./Colors";

export const Logo = (props: any) => {
  return (
    <Image
      source={require("@/assets/svg/logo.png")} // Correct usage for local images
      style={{
        ...props.style,
        height: props.height || 100,
        width: props.width || 100,
      }} // Ensures the image fits within the container
    />
  );
};

export const LandingImage = (props: any) => {
  return (
    <Image
      source={require("@/assets/svg/landing1.png")}
      style={{
        ...props.style,
        marginTop: props.mt || 0,
        height: props.height || 360,
        width: props.width || "100%",
        objectFit: "contain",
      }} // Ensures the image fits within the container
    />
  );
};
