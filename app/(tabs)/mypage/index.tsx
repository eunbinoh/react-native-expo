import useAuth from "@/hooks/query/useAuth";
import { router, useFocusEffect } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function MyPageScreen() {
  const { auth } = useAuth();

  useFocusEffect(() => {
    !auth.id && router.replace("/auth");
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>마이페이지</Text>
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
