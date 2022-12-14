import { theme } from "@exploriana/config";
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";

interface TextFieldProps extends Omit<TextInputProps, "style"> {
  isInvalid?: boolean;
  errorText?: string;
  helperText?: string;
  style?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
}

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    paddingLeft: 24,
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
    fontFamily: theme.font.regular,
    fontSize: 16,
    borderRadius: theme.shapes.rounded.lg,
  },
  icon: {
    paddingHorizontal: 18,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  helperText: {
    marginTop: 4,
    marginLeft: 12,
    color: theme.colors.placeholder,
    fontFamily: theme.font.regular,
    fontSize: 13,
  },
  errorText: {
    color: theme.colors.error,
  },
});

export function TextField({ icon, isInvalid, helperText, errorText, style, ...props }: TextFieldProps) {
  return (
    <View style={style}>
      <View style={[styles.wrapper, isInvalid && styles.invalid]}>
        <TextInput placeholderTextColor={theme.colors.placeholder} style={styles.input} {...props}></TextInput>
        {icon ? <View style={styles.icon}>{icon}</View> : null}
      </View>
      <Text style={[styles.helperText, isInvalid && styles.errorText]}>{isInvalid ? errorText || helperText || "" : helperText || ""}</Text>
    </View>
  );
}
