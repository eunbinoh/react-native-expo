import NewButton from "@/components/NewButton";
import { Link, router } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <NewButton
          label="로그인"
          size="large"
          onPress={() => router.push("/auth/login")}
        />
        <Link
          href={"/auth/signup"}
          style={styles.signupText}
          onPress={() => router.push("/auth/signup")}
        >
          <Text>가입하러 가기</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 160,
    height: 160,
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 2,
    width: "100%",
    marginTop: 150,
    paddingHorizontal: 36,
    alignItems: "center",
  },
  signupText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});
