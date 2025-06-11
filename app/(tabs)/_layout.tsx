import { colors } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.VL_600,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              size={24}
              name={focused ? "home-sharp" : "home-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "마이페이지",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              size={24}
              name={focused ? "person-circle" : "person-circle-outline"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "설정",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              size={24}
              name={focused ? "settings" : "settings-outline"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
