import { MD3DarkTheme as PaperDarkTheme } from "react-native-paper";

export const Colors = {
  primary: "#0096FF",
  backgroundColor: "#18181B",
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
