import { useState } from "react";
import { theme } from "@exploriana/config";
import { Ionicons } from "@expo/vector-icons";
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from "react-native";
import { sharedStyles } from "@exploriana/styles/shared";

interface PasswordFieldProps extends Omit<TextInputProps, "secureTextEntry" | "style"> {
  isInvalid?: boolean;
  errorText?: string;
  helperText?: string;
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    paddingLeft: 24,
    flexDirection: "row",
    backgroundColor: theme.colors.background,
    borderRadius: theme.shapes.rounded.lg,
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

export function PasswordField({ isInvalid, helperText, errorText, style, ...props }: PasswordFieldProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => setSecureTextEntry((state) => !state);

  return (
    <View style={style}>
      <View style={styles.wrapper}>
        <TextInput placeholderTextColor={theme.colors.placeholder} secureTextEntry={secureTextEntry} style={styles.input} {...props} />
        <TouchableOpacity activeOpacity={0.5} onPress={toggleSecureTextEntry} style={styles.icon}>
          <Ionicons name={secureTextEntry ? "eye" : "eye-off"} style={sharedStyles.inputIcon} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.helperText, isInvalid && styles.errorText]}>{isInvalid ? errorText || helperText || "" : helperText || ""}</Text>
    </View>
  );
}
