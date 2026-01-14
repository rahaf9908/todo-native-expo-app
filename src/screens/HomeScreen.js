import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { TodoContext } from "../context/TodoContext";
import AddTodoForm from "../components/AddTodoForm";
import TaskItem from "../components/TaskItem";

export default function HomeScreen({ navigation }) {
  const { todos, isReady, addTodo, toggleDone } = useContext(TodoContext);

  if (!isReady) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AddTodoForm onAdd={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 10, paddingVertical: 12 }}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleDone(item.id)}
            onUpdate={() => navigation.navigate("Update", { id: item.id })}
            onDelete={() => navigation.navigate("Delete", { id: item.id })}
          />
        )}
        ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20 }}> مافي ولا مهمة, ضيف مهامك اذا بتحب</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
