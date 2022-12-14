import { Box } from "@exploriana/components/Box";
import { PrimaryButton } from "@exploriana/components/Button";
import { Airplane, Clouds } from "@exploriana/components/Icons";
import { TextField } from "@exploriana/components/Input";
import { Body, Heading } from "@exploriana/components/Typography";
import { sharedStyles } from "@exploriana/styles/shared";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ForgotPasswordScreenProps {}

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  caption: {
    marginTop: 8,
  },
});

export function ForgotPasswordScreen({}: ForgotPasswordScreenProps) {
  return (
    <SafeAreaView style={sharedStyles.fullHeight}>
      <StatusBar backgroundColor="white" style="dark" />
      <ScrollView contentContainerStyle={[sharedStyles.fullGrow, sharedStyles.justifyBetween, sharedStyles.pv]}>
        <Box paddingHorizontal={sharedStyles.ph.paddingHorizontal} alignItems="center">
          <Clouds />
        </Box>
        <View style={[sharedStyles.ph]}>
          <Heading textAlign="center">Forgot your password?</Heading>
          <Body style={styles.caption} textAlign="center" lineHeight={26}>
            Enter your registered email. We will send you a reset link valid for 24 hours.
          </Body>
          <Box marginTop={32}>
            <TextField
              placeholder="Phone Number"
              helperText="Enter your registered phone number"
              errorText="Please provide a valid phone number"
              icon={<Ionicons name="call" style={sharedStyles.inputIcon} />}
            />
            <PrimaryButton style={styles.button} label="Send Reset Link" />
          </Box>
        </View>
        <Box alignItems="center">
          <Airplane height={160} width={160} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
