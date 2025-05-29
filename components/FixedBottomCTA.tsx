import NewButton from "@/components/NewButton";
import colors from "@/constants";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface FixedBottomCTAProps {
  label: string;
  onPress: () => void;
}

export default function FixedBottomCTA({
  label,
  onPress,
}: FixedBottomCTAProps) {
  const inset = useSafeAreaInsets();
  return (
    <View style={[styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
      <NewButton label={label} size="large" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  fixed: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    borderRadius: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GR_300,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
});
