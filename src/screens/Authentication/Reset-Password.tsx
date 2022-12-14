import { Box } from "@exploriana/components/Box";
import { PrimaryButton } from "@exploriana/components/Button";
import { Airplane, Clouds } from "@exploriana/components/Icons";
import { PasswordField, TextField } from "@exploriana/components/Input";
import { Body, Heading } from "@exploriana/components/Typography";
import { sharedStyles } from "@exploriana/styles/shared";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ResetPasswordScreenProps {}

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  caption: {
    marginTop: 4,
  },
  textField: {
    marginTop: 16,
  },
});

export function ResetPasswordScreen({}: ResetPasswordScreenProps) {
  return (
    <SafeAreaView style={sharedStyles.fullHeight}>
      <StatusBar backgroundColor="white" style="dark" />
      <ScrollView contentContainerStyle={[sharedStyles.fullGrow, sharedStyles.justifyBetween, sharedStyles.pv]}>
        <Box paddingHorizontal={sharedStyles.ph.paddingHorizontal} alignItems="center">
          <Clouds />
        </Box>
        <View style={[sharedStyles.ph]}>
          <Heading textAlign="center">Reset your password?</Heading>
          <Body style={styles.caption} textAlign="center" lineHeight={26}>
            Use a strong password with letters, numbers and symbols. Change it often.
          </Body>
          <Box marginTop={32}>
            <PasswordField placeholder="New Password" helperText="Enter your new password" errorText="Please provide your new password" />
            <PasswordField
              style={styles.textField}
              placeholder="Confirm Password"
              helperText="Re-enter your new password"
              errorText="Passwords doesn't match"
            />
            <PrimaryButton style={styles.button} label="Reset Password" />
          </Box>
        </View>
        <Box alignItems="center">
          <Airplane height={160} width={160} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
