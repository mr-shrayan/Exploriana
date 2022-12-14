import { theme } from "@exploriana/config";
import { TypographyProps } from "@exploriana/interface";
import { Text, TextStyle } from "react-native";

export function Body({
  size = "lg",
  textAlign = "left",
  color = theme.colors.text,
  fontWeight = "regular",
  lineHeight,
  style,
  ...props
}: TypographyProps) {
  const pStyle: TextStyle = {
    fontSize: size === "sm" ? 14 : size === "md" ? 15 : 16,
    lineHeight: lineHeight ? lineHeight : size === "sm" ? 20 : size === "md" ? 24 : 28,
    fontFamily: theme.font[fontWeight],
    color,
    textAlign,
  };

  return <Text style={[pStyle, style]} {...props}></Text>;
}
