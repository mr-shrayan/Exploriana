import { theme } from "@exploriana/config";
import { Feather } from "@expo/vector-icons";
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";

interface SearchBarProps extends Omit<TextInputProps, "style"> {
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    paddingHorizontal: 18,
    flexDirection: "row",
    backgroundColor: theme.colors.background,
    borderRadius: theme.shapes.rounded.lg,
  },
  invalid: {
    borderWidth: 1,
    borderColor: theme.colors.error,
  },
  input: {
    height: 56,
    flex: 1,
    marginHorizontal: 18,
    fontFamily: theme.font.regular,
    fontSize: 16,
    borderRadius: theme.shapes.rounded.lg,
  },
  icon: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
});

export function SearchBar({ style, ...props }: SearchBarProps) {
  return (
    <View style={style}>
      <View style={[styles.wrapper]}>
        <View style={styles.icon}>
          <Feather name="search" size={18} color={theme.colors.placeholder} />
        </View>
        <TextInput returnKeyType="search" placeholderTextColor={theme.colors.placeholder} style={styles.input} {...props}></TextInput>
      </View>
    </View>
  );
}
