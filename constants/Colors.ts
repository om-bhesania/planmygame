import { MD3DarkTheme as PaperDarkTheme } from "react-native-paper";

export const Colors = {
  primary: "#A7D396",
  backgroundColor: "#171816",
  textColor: "#F0F0F0",
  cardBg: "#121315",
  vctorBg: "#A0A0A0",
};

export const CombinedTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...Colors,
  },
};
