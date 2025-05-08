import NewButton from "@/components/NewButton";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function HomeScreen() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>DPOST</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          value={text}
          onChangeText={(value) => setText(value)}
          style={styles.input}
        />
        <Pressable onPress={() => console.log(text)} style={styles.pressable}>
          <Text>CLICK</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <NewButton label="버튼" size="large" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    width: "80%",
  },
  pressable: {
    backgroundColor: "gray",
    padding: 10,
    width: "20%",
    alignItems: "center",
  },
});
