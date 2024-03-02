import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { useState } from "react";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/Theme";

// function??
type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type ToggleComplete = (selectedTodo: Todo) => void;

//inside a todo have 3 item
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  //add a todo
  const handleAdd: AddTodo = (newTodo) => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    }
  };

  //delete todo, btn function
  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.id !== todoToRemove.id
    );
    setTodos(updatedTodos);
  };

  //checkbox, click then mark as complete
  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === selectedTodo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div className="font-Josefin font-normal text-base w-full h-full">
      <ThemeProvider>
        <Header />
        <div>
          <TodoInput addTodo={handleAdd} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            onRemoveTodo={removeTodo}
            handleClearCompleted={handleClearCompleted}
          />
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
