import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { Box } from "@exploriana/components/Box";
import { Body, Caption } from "@exploriana/components/Typography";
import { theme } from "@exploriana/config";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.surface,
    marginLeft: 24,
    borderRadius: theme.shapes.rounded.lg,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 16,
    ...theme.shadows.sm,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: theme.shapes.rounded.md,
  },
});

const source = { uri: "https://images.livemint.com/img/2021/09/10/1600x900/b5afe0de-a2b4-11eb-9703-d2c358e85cf6_1626174820288_1631257232824.jpg" };

export function CarouselOfferCard() {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.card, { width: width - 80 }]}>
      <Image source={source} style={styles.image} />
      <Box marginLeft={12}>
        <Body size="lg" fontWeight="medium" lineHeight={20} color="black" style={{ width: width - 210 }}>
          Indigo Airlines offering upto 50% off
        </Body>
        <Caption style={{ width: width - 210, marginTop: 4 }}>Travel to your favourite places for cheap. T&C apply.</Caption>
      </Box>
    </View>
  );
}
