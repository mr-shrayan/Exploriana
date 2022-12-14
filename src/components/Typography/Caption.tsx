import { theme } from "@exploriana/config";
import { TypographyProps } from "@exploriana/interface";
import { Text, TextStyle } from "react-native";

export function Caption({
  textAlign = "left",
  color = theme.colors.text,
  fontWeight = "regular",
  style,
  ...props
}: Omit<TypographyProps, "size" | "lineHeight">) {
  const pStyle: TextStyle = {
    fontSize: 12,
    fontFamily: theme.font[fontWeight],
    color,
    textAlign,
  };

  return <Text style={[pStyle, style]} {...props}></Text>;
}
