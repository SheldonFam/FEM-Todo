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
      <AppContent todos={todos} todoActions={todoActions} />
    </ThemeProvider>
  );
};

const AppContent = ({
  todos,
  todoActions,
}: {
  todos: Todo[];
  todoActions: TodoActions;
}) => {
  // Import background images
  const bgDesktopLight = "/bg-desktop-light.jpg";
  const bgDesktopDark = "/bg-desktop-dark.jpg";
  const bgMobileLight = "/bg-mobile-light.jpg";
  const bgMobileDark = "/bg-mobile-dark.jpg";

  const { theme } = useContext(ThemeContext);

  return (
    <section className="relative min-h-screen font-Josefin font-normal text-base bg-[#FAFAFA] dark:bg-[#171823]">
      {/* Background Image Layer */}
      <div className="absolute inset-x-0 top-0 h-[200px] overflow-hidden">
        <img
          src={theme === "light" ? bgMobileLight : bgMobileDark}
          alt="background"
          className="w-full h-full object-cover sm:hidden" // Mobile only
        />
        <img
          src={theme === "light" ? bgDesktopLight : bgDesktopDark}
          alt="background"
          className="hidden sm:block w-full h-full object-cover" // Show only on screens ≥ 640px
        />
      </div>

      {/* Content Layer */}
      <main className="relative px-6 pt-12 max-w-[540px] mx-auto">
        <Header />
        <section className="mt-8 space-y-4">
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
        </section>
      </main>
    </section>
  );
};

export default App;
