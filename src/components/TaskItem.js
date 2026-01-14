import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function TaskItem({ task, onToggle, onUpdate, onDelete }) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onToggle} style={{ flex: 1 }}>
        <Text style={[styles.text, task.done && styles.done]} numberOfLines={1}>
          {task.title}
        </Text>
      </Pressable>

      <View style={styles.actions}>
        <Pressable onPress={onUpdate}><Text style={styles.link}>Update</Text></Pressable>
        <Pressable onPress={onDelete}><Text style={[styles.link, styles.danger]}>Delete</Text></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderRadius: 12, padding: 12, flexDirection: "row", alignItems: "center", gap: 12 },
  text: { fontSize: 16 },
  done: { textDecorationLine: "line-through", opacity: 0.6 },
  actions: { flexDirection: "row", gap: 12 },
  link: { fontWeight: "700" },
  danger: { },
});
