import FeedList from "@/components/FeedList";
import { colors } from "@/constants";
import useAuth from "@/hooks/query/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const { auth } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>DPOST</Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 120 }}>
        <FeedList />
        {auth.id && (
          <Pressable
            style={styles.writeButton}
            onPress={() => router.push("/post/write")}
          >
            <Ionicons name="pencil" size={32} color="white" />
          </Pressable>
        )}
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
  writeButton: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: colors.VL_600,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.BK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 2,
  },
});
