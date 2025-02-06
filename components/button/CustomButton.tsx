import React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import { Button, ButtonProps, TouchableRipple } from "react-native-paper";

interface CustomButtonProps extends ButtonProps {
  customStyle?: StyleProp<ViewStyle>;
  props?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  customStyle,
  style,
  children,
  ...props
}) => {
  return (
    <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" style={{width:'100%'}}>
      <Button {...props} style={[style, { borderRadius: 8 }]}>
        <Text style={{ fontWeight: "700" ,color:'white' }}>{children}</Text>
      </Button>
    </TouchableRipple>
  );
};

export default CustomButton;
