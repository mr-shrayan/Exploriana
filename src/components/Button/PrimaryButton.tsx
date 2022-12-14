import * as React from "react";
import { theme } from "@exploriana/config";
import { Box } from "@exploriana/components/Box";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Platform, Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { ButtonProps } from "@exploriana/interface";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface PrimaryButtonProps extends ButtonProps {
  background?: string;
  color?: string;
  icon?: React.ReactNode;
}

export function PrimaryButton({ label, fullWidth, style, color, icon, background, onPress }: PrimaryButtonProps) {
  const scale = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 150 }) }],
    };
  });

  const onPressIn = () => (scale.value = 0.98);
  const onPressOut = () => (scale.value = 1);

  const pStyle: ViewStyle = {
    width: fullWidth ? "100%" : "auto",
    backgroundColor: background || theme.colors.primary,
  };

  return (
    <AnimatedPressable style={[styles.button, rStyle, pStyle, style]} onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
      {icon ? <Box marginRight={12}>{icon}</Box> : null}
      <Text style={[styles.label, { color: color || theme.colors.surface }]}>{label}</Text>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    minWidth: 120,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 32,
    justifyContent: "center",
    borderRadius: theme.shapes.rounded.lg,
    ...theme.shadows.md,
  },
  label: {
    fontSize: 16,
    fontFamily: theme.font.medium,
  },
});
