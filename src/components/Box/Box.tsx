import React from "react";
import { View, ViewStyle } from "react-native";

export interface BoxProps extends ViewStyle {
  children?: React.ReactNode;
}

export function Box({ children, ...style }: BoxProps) {
  return <View {...{ style }}>{children}</View>;
}
