import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "TODOS_V1";

export async function loadTodos() {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export async function saveTodos(todos) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(todos));
  } catch {
  }
}
