import { colors } from "@/constants";
import { Stack } from "expo-router";

export default function SettginLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.WH },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "설정" }}
      />
    </Stack>
  );
}
