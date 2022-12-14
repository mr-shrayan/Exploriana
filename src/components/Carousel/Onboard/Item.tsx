import { Box } from "@exploriana/components/Box";
import { theme } from "@exploriana/config";
import { ListImageItem } from "@exploriana/interface";
import { useMemo } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

interface ItemProps {
  item: ListImageItem;
  index: number;
  scrollX: Animated.SharedValue<number>;
  input: Array<number>;
}

export function Item({ index, input, item, scrollX }: ItemProps) {
  const { width } = useWindowDimensions();

  const output = useMemo(() => input.map((_, i) => (i === index ? 1 : 0.75)), [input, index]);

  const style = useAnimatedStyle(() => {
    const scale = interpolate(scrollX.value, input, output);
    return {
      transform: [{ scale }],
    };
  });

  const source = { uri: item.uri, width: width - 64 };

  return (
    <Box width={width} alignItems="center">
      <Animated.View style={[styles.container, { width: width - 64 }, style]}>
        <Animated.Image accessibilityLabel="carousel-image" source={source} style={[styles.image]} />
      </Animated.View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.shapes.rounded.lg,
    elevation: 5,
    shadowColor: theme.colors.backdrop,
    shadowRadius: 10,
  },
  image: {
    borderRadius: theme.shapes.rounded.lg,
    aspectRatio: 1,
  },
});
