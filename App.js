import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [keyValue, setKeyValue] = useState("");

  return (
    <View style={styles.container}>
      <Text>Working input: asdfgh</Text>
      <Text>Broken input: a😅sdg你好n</Text>
      <Text
        style={{
          margin: 10,
          fontSize: 16,
        }}
      >
        Key pressed: {keyValue}
      </Text>
      <TextInput
        value={value}
        multiline
        onChangeText={(text) => setValue(text)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 200 }}
        onKeyPress={(e) => {
          console.log(e.nativeEvent);
          setKeyValue(e.nativeEvent.key);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
