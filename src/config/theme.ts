import { Platform } from "react-native";

export const theme = {
  colors: {
    primary: "#FF863C",
    secondary: "#1E63B5",
    text: "#6A7F87",
    heading: "#000000",
    placeholder: "#999999",
    background: "#F4F4F4",
    surface: "#FFFFFF",
    backdrop: "#00000033",
    error: "#DC2626",
    success: "#16A34A",
    warning: "#D97706",
    tint: "#B5B5B5",
  },
  shapes: {
    rounded: {
      sm: 8,
      md: 12,
      lg: 16,
    },
  },
  font: {
    regular: "Montserrat",
    medium: "Montserrat-Medium",
    bold: "Montserrat-Bold",
  },
  shadows: {
    sm: Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: "#00000033",
        shadowRadius: 8,
      },
      default: {
        shadowColor: "#00000033",
        shadowRadius: 8,
      },
    }),
    md: Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: "#00000033",
        shadowRadius: 12,
      },
      default: {
        shadowColor: "#00000033",
        shadowRadius: 12,
      },
    }),
    lg: Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#00000033",
        shadowRadius: 16,
      },
      default: {
        shadowColor: "#00000033",
        shadowRadius: 16,
      },
    }),
  },
};
