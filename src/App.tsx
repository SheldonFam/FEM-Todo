import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { useState, useContext } from "react";
import { TodoList } from "./components/TodoList";
import { ThemeProvider, ThemeContext } from "./context/Theme";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoActions = {
  addTodo: (newTodo: string) => void;
  removeTodo: (todoToRemove: Todo) => void;
  toggleComplete: (selectedTodo: Todo) => void;
  clearCompleted: () => void;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { theme } = useContext(ThemeContext);

  const todoActions: TodoActions = {
    addTodo: (newTodo) => {
      if (newTodo) {
        setTodos([
          ...todos,
          { id: Date.now(), text: newTodo, completed: false },
        ]);
      }
    },

    removeTodo: (todoToRemove) => {
      setTodos(todos.filter((todo) => todo.id !== todoToRemove.id));
    },

    toggleComplete: (selectedTodo) => {
      setTodos(
        todos.map((todo) =>
          todo.id === selectedTodo.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      );
    },

    clearCompleted: () => {
      setTodos(todos.filter((todo) => !todo.completed));
    },
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen font-Josefin font-normal text-base bg-[#FAFAFA] dark:bg-[#171823]">
        <div className="relative">
          {/* Background Image Layer */}
          <div
            className={`absolute inset-x-0 top-0 h-[200px] md:h-[300px] bg-cover bg-no-repeat ${
              theme === "light"
                ? "bg-[url('/images/bg-mobile-light.jpg')] md:bg-[url('/images/bg-desktop-light.jpg')]"
                : "bg-[url('/images/bg-mobile-dark.jpg')] md:bg-[url('/images/bg-desktop-dark.jpg')]"
            }`}
          ></div>

          {/* Content Layer */}
          <div className="relative z-20">
            <Header />
            <main className="max-w-[540px] mx-auto px-6">
              <TodoInput addTodo={todoActions.addTodo} />
              <TodoList
                todos={todos}
                toggleComplete={todoActions.toggleComplete}
                onRemoveTodo={todoActions.removeTodo}
                handleClearCompleted={todoActions.clearCompleted}
              />
              <p className="text-center text-[14px] text-[#9495A5] dark:text-[#5B5E7E] mt-10">
                Drag and drop to reorder list
              </p>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
