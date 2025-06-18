import { colors } from "@/constants";
import { Feather } from "@expo/vector-icons";
import { Link, router, Stack } from "expo-router";

export default function PostLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.WH,
        },
      }}
    >
      <Stack.Screen
        name="write"
        options={{
          title: "글쓰기",
          headerShown: true,
          headerLeft: () => (
            <Link href={"/"} replace>
              <Feather name="arrow-left" size={28} color={"black"} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="edit/[id]"
        options={{
          title: "글수정",
          headerShown: true,
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={28}
              color={"black"}
              onPress={() => router.back()}
            />
          ),
        }}
      />
    </Stack>
  );
}
