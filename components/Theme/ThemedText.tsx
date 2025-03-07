import React from "react";
import { Text, TextStyle, ColorValue } from "react-native";
import { CombinedTheme } from "@/constants/Colors";

interface ThemedTextProps {
  variant?: "heading" | "title" | "para";
  size?: number;
  color?: ColorValue;
  style?: TextStyle;
  children: React.ReactNode;
}

const ThemedText: React.FC<ThemedTextProps> = ({
  variant = "para",
  size,
  color,
  style,
  children,
}) => {
  const variantStyles: Record<string, TextStyle> = {
    heading: {
      fontSize: 32,
      color: CombinedTheme.colors.primary,
    },
    title: {
      fontSize: 24,
      color: CombinedTheme.colors.primary,
    },
    para: {
      fontSize: 16,
      color: color || CombinedTheme.colors.textColor,
    },
  };

  const finalStyle = {
    ...variantStyles[variant],
    ...(size && { fontSize: size }),
    ...style,
  };

  return <Text style={finalStyle}>{children}</Text>;
};

export default ThemedText;

