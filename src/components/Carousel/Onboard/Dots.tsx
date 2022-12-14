import { theme } from "@exploriana/config";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, { interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";

interface DotProps {
  index: number;
  scrollX: Animated.SharedValue<number>;
  input: Array<number>;
}

export function Dots({ index, scrollX, input }: DotProps) {
  const activeColor = theme.colors.primary;
  const inactiveColor = theme.colors.tint;

  const widthOutput = useMemo(() => input.map((_, i) => (i === index ? 30 : 5)), [input, index]);
  const backgroundOutput = useMemo(() => input.map((_, i) => (i === index ? activeColor : inactiveColor)), [index, input]);

  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(scrollX.value, input, backgroundOutput, "RGB") as string;
    const width = interpolate(scrollX.value, input, widthOutput);
    return {
      backgroundColor,
      width,
    };
  });

  return <Animated.View style={[styles.dots, style]} />;
}

const styles = StyleSheet.create({
  dots: {
    width: 5,
    height: 5,
    borderRadius: 12,
    marginHorizontal: 4,
  },
});
