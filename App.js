import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";
import { TodoProvider } from "./src/context/TodoContext";

export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TodoProvider>
  );
}
