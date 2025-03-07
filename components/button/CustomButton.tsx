import { CombinedTheme } from "@/constants/Colors";
import React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import { Button, ButtonProps, TouchableRipple } from "react-native-paper";

interface CustomButtonProps extends ButtonProps {
  customStyle?: StyleProp<ViewStyle>;
  props?: any;
  textStyle?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  customStyle,
  style,
  textStyle,
  children,
  ...props
}) => {
  return (
    <TouchableRipple
      rippleColor="rgba(0, 0, 0, .32)"
      style={[customStyle, { borderRadius: 8,width:'100%' }]}
      onPress={props.onPress}
    >
      <Button
        {...props}
        dark
        style={[
          style,
          {
            borderRadius: 8,
            width: "100%", // Ensures the button fills its container
            backgroundColor: props.disabled
              ? "#A0A0A0"
              : CombinedTheme.colors.primary,
          },
        ]}
      >
        <Text
          style={[
            textStyle,
            {
              fontWeight: "700",
              color: props.textColor || CombinedTheme.colors.backgroundColor,
            },
          ]}
        >
          {children}
        </Text>
      </Button>
    </TouchableRipple>
  );
};

export default CustomButton;
