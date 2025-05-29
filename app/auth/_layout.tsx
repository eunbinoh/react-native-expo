import { Foundation } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "white" } }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "로그인",
          headerLeft: () => (
            <Link href="/" replace>
              <Foundation name="home" size={20} color={"black"} />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
          title: "이메일 로그인",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: true,
          title: "회원가입",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
