import React, { useContext, useMemo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TodoContext } from "../context/TodoContext";

export default function DeleteScreen({ route, navigation }) {
  const { id } = route.params || {};
  const { todos, deleteTodo } = useContext(TodoContext);

  const todo = useMemo(() => todos.find((t) => t.id === id), [todos, id]);

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text>Todo not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Delete</Text>
      <Text style={styles.subtitle}>Delete: {todo.title}</Text>

      <View style={styles.row}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <View style={{ width: 12 }} />
        <Button
          title="Confirm Delete"
          onPress={() => {
            deleteTodo(id);
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center", gap: 12 },
  title: { fontSize: 22, fontWeight: "800", textAlign: "center" },
  subtitle: { fontSize: 16, textAlign: "center" },
  row: { flexDirection: "row", justifyContent: "center", alignItems: "center" },
});
