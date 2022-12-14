import { Box } from "@exploriana/components/Box";
import { Airplane } from "@exploriana/components/Icons";
import { PasswordField, TextField } from "@exploriana/components/Input";
import { Body, Heading } from "@exploriana/components/Typography";
import { sharedStyles } from "@exploriana/styles/shared";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Ionicons, Zocial } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, TextButton } from "@exploriana/components/Button";
import { Divider } from "@exploriana/components/Divider";
import { theme } from "@exploriana/config";

interface RegisterScreenProps {}

const styles = StyleSheet.create({
  textField: {
    marginTop: 16,
  },
  button: {
    marginTop: 20,
  },
  forgotPassword: {
    marginTop: 4,
    alignSelf: "flex-end",
  },
});

export function RegisterScreen({}: RegisterScreenProps) {
  return (
    <SafeAreaView style={sharedStyles.fullHeight}>
      <StatusBar backgroundColor="white" style="dark" />
      <ScrollView contentContainerStyle={[sharedStyles.fullGrow, sharedStyles.justifyBetween, sharedStyles.pv]}>
        <View style={[sharedStyles.ph]}>
          <Box alignItems="center">
            <Airplane height={80} width={80} />
          </Box>
          <Heading textAlign="center">Welcome to Exploriana</Heading>
          <Body textAlign="center">Create your account to continue</Body>
          <Box marginTop={36}>
            <TextField
              placeholder="Full Name"
              helperText="Enter your full name"
              errorText="Please provide a your full name"
              icon={<Ionicons name="call" style={sharedStyles.inputIcon} />}
            />
            <TextField
              style={styles.textField}
              placeholder="Phone Number"
              helperText="Enter your registered phone number"
              errorText="Please provide a valid phone number"
              icon={<Ionicons name="call" style={sharedStyles.inputIcon} />}
            />
            <PasswordField
              style={styles.textField}
              placeholder="Password"
              helperText="Enter your password"
              errorText="Please provide your password"
            />
            <PasswordField
              style={styles.textField}
              placeholder="Confirm Password"
              helperText="Re-enter your password"
              errorText="Passwords doesn't match"
            />
            <PrimaryButton style={styles.button} label="Register" />
          </Box>
          <Divider style={{ marginTop: 24 }} caption="Or Register With" />
          <Box flexDirection="row" marginTop={24}>
            <PrimaryButton
              label="Facebook"
              style={{ flex: 1, marginRight: 8 }}
              background="#1E63B5"
              color={theme.colors.surface}
              icon={<Zocial name="facebook" size={20} color={theme.colors.surface} />}
            />
            <PrimaryButton
              icon={
                <Image
                  resizeMode="contain"
                  source={{ uri: "https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png", height: 24, width: 24 }}
                />
              }
              style={{ flex: 1, marginLeft: 8 }}
              label="Google"
              color={theme.colors.heading}
              background={theme.colors.surface}
            />
          </Box>
        </View>
        <View>
          <Body textAlign="center">Already have an account? Login</Body>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
