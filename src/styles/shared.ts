import { theme } from "@exploriana/config";
import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
  fullGrow: {
    flexGrow: 1,
  },
  minGrow: {
    flexGrow: 0,
  },
  pvSmall: {
    paddingVertical: 16,
  },
  pv: {
    paddingVertical: 24,
  },
  ph: {
    paddingHorizontal: 24,
  },
  pvMedium: {
    paddingVertical: 36,
  },
  pvLarge: {
    paddingVertical: 48,
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  inputIcon: {
    fontSize: 18,
    color: theme.colors.placeholder,
  },
});
