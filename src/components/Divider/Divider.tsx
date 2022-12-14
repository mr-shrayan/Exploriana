import { Box } from "@exploriana/components/Box";
import { theme } from "@exploriana/config";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface DividerProps {
  caption?: string;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.font.regular,
    fontSize: 14,
    color: theme.colors.placeholder,
    marginHorizontal: 8,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export function Divider({ caption, style }: DividerProps) {
  return (
    <View style={[styles.container, style]}>
      <Box flex={1} height={1.5} backgroundColor={theme.colors.background}></Box>
      {caption ? <Text style={styles.text}>{caption}</Text> : null}
      <Box flex={1} height={1.5} backgroundColor={theme.colors.background}></Box>
    </View>
  );
}
