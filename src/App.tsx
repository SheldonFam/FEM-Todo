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

//the button?
type FilterType = "all" | "active" | "completed";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  //add a todo
  const handleAdd: AddTodo = (newTodo) => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    }
  };

  //delete todo, btn function
  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo !== todoToRemove
    );
    setTodos(updatedTodos);
  };

  //checkbox, click then mark as complete
  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  //filter the todo based on the type?
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return todo; // "all" filter
  });

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const counter = (
    <>
      {filter === "completed"
        ? `${filteredTodos.filter((todo) => todo.completed).length} items left`
        : `${
            filteredTodos.filter((todo) => !todo.completed).length
          } items left`}
    </>
  );

  return (
    <div className="font-Josefin font-normal text-base">
      <ThemeProvider>
        <Header />
        <TodoInput addTodo={handleAdd} />
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          onRemoveTodo={removeTodo}
          filter={filter}
          setFilter={setFilter}
          handleClearCompleted={handleClearCompleted}
          counter={counter}
        />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
