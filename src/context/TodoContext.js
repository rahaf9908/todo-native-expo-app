import React, { createContext, useEffect, useMemo, useState } from "react";
import { loadTodos, saveTodos } from "../storage/todoStorage";

export const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      const stored = await loadTodos();
      setTodos(stored);
      setIsReady(true);
    })();
  }, []);

  useEffect(() => {
    if (!isReady) return;
    saveTodos(todos);
  }, [todos, isReady]);

  const api = useMemo(() => {
    return {
      todos,
      isReady,
      addTodo: (title) => {
        const trimmed = title.trim();
        if (!trimmed) return;
        setTodos((prev) => [
          { id: String(Date.now()), title: trimmed, done: false },
          ...prev,
        ]);
      },
      toggleDone: (id) => {
        setTodos((prev) =>
          prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
        );
      },
      updateTodo: (id, newTitle) => {
        const trimmed = newTitle.trim();
        if (!trimmed) return;
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title: trimmed } : t)));
      },
      deleteTodo: (id) => {
        setTodos((prev) => prev.filter((t) => t.id !== id));
      },
    };
  }, [todos, isReady]);

  return <TodoContext.Provider value={api}>{children}</TodoContext.Provider>;
}
