import { theme } from "@exploriana/config";
import { TypographyProps } from "@exploriana/interface";
import { Text, TextStyle } from "react-native";

export function Heading({ size = "md", textAlign = "left", color = theme.colors.heading, fontWeight = "bold", style, ...props }: TypographyProps) {
  const pStyle: TextStyle = {
    fontSize: size === "sm" ? 20 : size === "md" ? 24 : 28,
    fontFamily: theme.font[fontWeight],
    color,
    textAlign,
  };

  return <Text style={[pStyle, style]} {...props}></Text>;
}
