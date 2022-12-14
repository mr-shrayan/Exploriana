import { PressableProps, TextProps } from "react-native";

export interface IconProps {
  fill?: string;
  height?: number;
  width?: number;
}

export interface TypographyProps extends TextProps {
  fontWeight?: "bold" | "medium" | "regular";
  textAlign?: "center" | "right" | "left";
  size?: "sm" | "md" | "lg";
  color?: string;
  lineHeight?: number;
}

export interface ButtonProps extends PressableProps {
  label: string;
  fullWidth?: boolean;
}

export interface ListImageItem {
  uri: string;
  key: string;
}

export interface CarouselProps {
  images: Array<ListImageItem>;
}
