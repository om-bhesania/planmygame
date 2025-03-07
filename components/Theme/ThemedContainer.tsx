import React from "react";
import { Dimensions, View, ViewStyle } from "react-native";
import { CombinedTheme } from "@/constants/Colors";
import { ThemedStyles } from "@/constants/ThemedStyles";

interface ThemedContainerProps {
  style?: ViewStyle;
  children: React.ReactNode;
}

const ThemedContainer: React.FC<ThemedContainerProps> = ({
  style,
  children,
}) => {
  return (
    <View
      style={{
        backgroundColor: CombinedTheme.colors.backgroundColor,
        height: Dimensions.get("window").height,
      }}
    >
      {children}
    </View>
  );
};

export default ThemedContainer;
