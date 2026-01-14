import React, { useContext, useMemo, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { TodoContext } from "../context/TodoContext";

export default function UpdateScreen({ route, navigation }) {
  const { id } = route.params || {};
  const { todos, updateTodo } = useContext(TodoContext);

  const todo = useMemo(() => todos.find((t) => t.id === id), [todos, id]);
  const [title, setTitle] = useState(todo?.title ?? "");

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text>Todo not found.</Text>
      </View>
    );
  }

  const onSave = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Title is required.");
      return;
    }
    updateTodo(id, title);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Todo</Text>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <Button title="Save" onPress={onSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  label: { fontSize: 16, fontWeight: "700" },
  input: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 10 },
});
