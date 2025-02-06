import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { LandingImage } from "./Icons";

const AnimatedLandingImage = ({ props }: any) => {
  const translateX = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [translateX]);

  return (
    <Animated.View style={{ transform: [{ translateX }], width: "100%" }}>
      <LandingImage width={"100%"} />
    </Animated.View>
  );
};

export default AnimatedLandingImage;
