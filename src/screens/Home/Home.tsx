import { Box } from "@exploriana/components/Box";
import { IconButton } from "@exploriana/components/Button";
import { CarouselDestinationCard, CarouselOfferCard, ServiceCard } from "@exploriana/components/Card";
import { Bus, Flight, Hotel, Restro, Tours, Train } from "@exploriana/components/Icons";
import { SearchBar } from "@exploriana/components/Input";
import { SectionHeader } from "@exploriana/components/Layout";
import { theme } from "@exploriana/config";
import { sharedStyles } from "@exploriana/styles/shared";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HomeScreenProps {}

const styles = StyleSheet.create({
  brand: {
    width: 70,
    height: 40,
  },
  content: {
    flexGrow: 1,
    paddingRight: 24,
    paddingVertical: 12,
  },
  container: {
    flexGrow: 0,
  },
});

export function HomeScreen({}: HomeScreenProps) {
  return (
    <SafeAreaView style={sharedStyles.fullHeight}>
      <StatusBar backgroundColor="white" style="dark" />
      <ScrollView contentContainerStyle={[sharedStyles.fullGrow, sharedStyles.pvSmall]}>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between" paddingHorizontal={24}>
          <IconButton>
            <Feather name="menu" size={24} color={theme.colors.placeholder} />
          </IconButton>
          <Image source={require("@resources/images/brand-1.png")} style={styles.brand} resizeMode="contain" />
          <IconButton>
            <Feather name="bell" size={24} color={theme.colors.placeholder} />
          </IconButton>
        </Box>
        <Box paddingHorizontal={24} marginTop={24}>
          <SearchBar placeholder="Search for places, hotels, flights ..." />
        </Box>
        <Box flexWrap="wrap" flexDirection="row" paddingHorizontal={16} paddingTop={8}>
          <ServiceCard caption="Flights" icon={<Flight height={36} />} />
          <ServiceCard caption="Hotels" icon={<Hotel height={36} />} />
          <ServiceCard caption="Restro" icon={<Restro height={36} />} />
          <ServiceCard caption="Tours" icon={<Tours height={36} />} />
          <ServiceCard caption="Bus" icon={<Bus height={36} />} />
          <ServiceCard caption="Trains" icon={<Train height={36} />} />
        </Box>
        <SectionHeader button="See All" title="Offers" />
        <ScrollView
          horizontal
          overScrollMode="never"
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <CarouselOfferCard />
          <CarouselOfferCard />
        </ScrollView>
        <SectionHeader button="See All" title="Popular Destinations" marginTop={16} />
        <ScrollView
          horizontal
          overScrollMode="never"
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <CarouselDestinationCard />
          <CarouselDestinationCard />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
