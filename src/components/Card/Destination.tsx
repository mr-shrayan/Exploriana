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
    height: 120,
    width: 120,
    borderRadius: theme.shapes.rounded.md,
  },
  tag: {
    left: 6,
    bottom: 6,
    position: "absolute",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.shapes.rounded.lg,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
});

const source = { uri: "https://cdn.britannica.com/71/99571-050-DFF0A6E5/Statue-of-Liberty-Island-New-York.jpg", height: 120, width: 120 };

export function CarouselDestinationCard() {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.card, { width: width - 80 }]}>
      <Box position="relative">
        <Image source={source} style={styles.image} />
        <View style={styles.tag}>
          <Caption fontWeight="medium" color={theme.colors.heading}>
            NY, USA
          </Caption>
        </View>
      </Box>
      <Box marginLeft={16} justifyContent="space-between" height={115}>
        <Box>
          <Body fontWeight="medium" lineHeight={20} color={theme.colors.heading} style={{ width: width - 250 }}>
            Statue Of Liberty
          </Body>
          <Caption style={{ width: width - 250, marginTop: 2 }}>A tour of the famous statue of liberty. Tour group of 10 people...</Caption>
        </Box>
        <Box alignSelf="flex-end">
          <Caption color={theme.colors.heading} textAlign="right">
            3 Days / 4 Nights
          </Caption>
          <Body size="sm" color={theme.colors.primary} fontWeight="bold" textAlign="right">
            INR 70,000
          </Body>
        </Box>
      </Box>
    </View>
  );
}
