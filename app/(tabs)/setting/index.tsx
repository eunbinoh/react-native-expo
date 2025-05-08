import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function SettingScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>설정화면</Text>
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
