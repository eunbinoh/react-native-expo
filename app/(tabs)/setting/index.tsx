import useAuth from "@/hooks/query/useAuth";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function SettingScreen() {
  const { logout } = useAuth();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text onPress={logout}>로그아웃</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    padding: 20,
  },
});
