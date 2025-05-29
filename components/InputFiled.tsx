import colors from "@/constants";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  variant?: "filled" | "outlined" | "standard";
}

export default function InputFiled({
  label = "",
  variant = "filled",
  ...props
}: InputFieldProps) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, styles[variant]]}>
        <TextInput
          placeholderTextColor={colors.GR_500}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 12,
    color: colors.GR_700,
    marginBottom: 4,
  },
  filled: {
    backgroundColor: colors.GR_100,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.GR_300,
  },
  standard: {
    borderWidth: 0,
  },
  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
});
