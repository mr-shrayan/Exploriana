import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen } from "@exploriana/screens/Home";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/montserrat.ttf"),
    "Montserrat-Medium": require("../assets/fonts/montserrat_medium.ttf"),
    "Montserrat-Bold": require("../assets/fonts/montserrat_bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
