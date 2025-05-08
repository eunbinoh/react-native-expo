import colors from "@/constants";
import React from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

interface NewButtonProps extends PressableProps {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "empty";
}

export default function NewButton({
  label,
  size = "large",
  variant = "filled",
  ...props
}: NewButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        styles[variant],
        pressed && styles.pressed,
      ]}
      {...props}
    >
      <Text style={styles[variant]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  small: {
    width: 40,
    height: 28,
  },
  medium: {
    width: 50,
    height: 38,
  },
  large: {
    width: "98%",
    height: 44,
    marginHorizontal: 4,
  },
  filled: {
    backgroundColor: colors.VL_600,
    color: colors.WH,
    fontWeight: "bold",
    fontSize: 16,
  },
  empty: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.VL_600,
    color: colors.VL_600,
  },
  pressed: {
    opacity: 0.7,
  },
});
