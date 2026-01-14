import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddTodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  return (
    <View style={styles.row}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Add a todo..."
        style={styles.input}
      />
      <Button
        title="Add"
        onPress={() => {
          onAdd(value);
          setValue("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 10, alignItems: "center" },
  input: { flex: 1, borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10 },
});
