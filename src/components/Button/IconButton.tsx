import * as React from "react";
import { TouchableOpacity } from "react-native";

interface IconButton {
  children: React.ReactNode;
}

export function IconButton({ children }: IconButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        paddingVertical: 2,
        paddingHorizontal: 4,
        backgroundColor: "red",
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
