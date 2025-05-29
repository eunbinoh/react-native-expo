import FeedList from "@/components/FeedList";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>DPOST</Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 120 }}>
        <FeedList />
      </View>

      {/* <View style={[styles.row, { marginTop: 00 }]}>
        <NewButton
          label="COME IN"
          size="large"
          onPress={() => router.push("/auth")}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 50,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
