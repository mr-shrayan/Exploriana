import { Box } from "@exploriana/components/Box";
import { CarouselProps, ListImageItem } from "@exploriana/interface";
import { useCallback, useMemo } from "react";
import { FlatList, ListRenderItem, StyleSheet, useWindowDimensions } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { Dots } from "./Dots";
import { Item } from "./Item";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<ListImageItem>);

export function OnboardCarousel({ images }: CarouselProps) {
  const { width } = useWindowDimensions();

  const scrollX = useSharedValue(0);

  const input = useMemo(() => images.map((_, i) => i * width), [images, width]);

  const scrollHandler = useAnimatedScrollHandler(({ contentOffset: { x } }) => {
    scrollX.value = x;
  });

  const renderItem: ListRenderItem<ListImageItem> = useCallback(
    ({ item, index }) => <Item item={item} index={index} input={input} scrollX={scrollX} />,
    [images, width, scrollX]
  );

  return (
    <Box>
      <AnimatedFlatList
        pagingEnabled
        overScrollMode="never"
        onScroll={scrollHandler}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
        horizontal
        data={images}
        renderItem={renderItem}
        accessibilityLabel="carousel"
      />
      <Box flexDirection="row" alignItems="center" justifyContent="center" marginTop={12}>
        {images.map(({ key }, index) => (
          <Dots key={key} index={index} input={input} scrollX={scrollX} />
        ))}
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 0,
    overflow: "visible",
    paddingVertical: 8,
  },
});
