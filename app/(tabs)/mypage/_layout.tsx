import { colors } from "@/constants";
import { Stack } from "expo-router";

export default function MyPageLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.WH },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "내정보" }}
      />
    </Stack>
  );
}
