import { StyleSheet } from "react-native";
import { CombinedTheme } from "./Colors";

export const ThemedStyles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex: 1,
    alignItems: "center",
    backgroundColor: CombinedTheme.colors.backgroundColor,
  },
  themedTextPrimary: {
    color: CombinedTheme.colors.primary,
    fontSize: 26,
  },
  themedTextHelper: {
    color: CombinedTheme.colors.textColor,
    fontSize: 16,
    textAlign:'center'
  },
});
