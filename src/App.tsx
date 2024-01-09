// import { Header } from "./components/Header";
// import { TodoInput } from "./components/TodoInput";
// import { useState } from "react";
// import { TodoList } from "./components/TodoList";

// type AddTodo = (newTodo: string) => void;
// type RemoveTodo = (todoToRemove: Todo) => void;
// type ToggleComplete = (selectedTodo: Todo) => void;

// type Todo = {
//   id: number;
//   text: string;
//   completed: boolean;
// };

// const App = () => {
//   const [todos, setTodos] = useState<Array<Todo>>([]);

//   const handleAdd: AddTodo = (newTodo) => {
//     if (newTodo) {
//       setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
//     }
//   };

//   const removeTodo: RemoveTodo = (todoToRemove) => {
//     let updatedTodos: Array<Todo> = todos.filter(
//       (todo) => todo.text !== todoToRemove.text
//     );
//     setTodos(updatedTodos);
//   };

//   const toggleComplete: ToggleComplete = (selectedTodo) => {
//     const updatedTodos = todos.map((todo) => {
//       if (todo === selectedTodo) {
//         return { ...todo, completed: !todo.completed };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <Header />
//       <TodoInput addTodo={handleAdd} />
//       <TodoList
//         todos={todos}
//         toggleComplete={toggleComplete}
//         onRemoveTodo={removeTodo}
//       />
//       <div className="flex justify-between py-4 px-4 border text-xs md:text-base">
//         <span>0 items left</span>
//         <div className="flex justify-center ">
//           <button className="px-2">All</button>
//           <button className="px-2">Active</button>
//           <button className="px-2">Completed</button>
//         </div>
//         <button>Clear Completed</button>
//       </div>
//       <footer>
//         <div className="flex items-center justify-center my-4 px-6 md:px-96">
//           <h3>Drag and drop to reorder list</h3>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { useState } from "react";
import { TodoList } from "./components/TodoList";

type AddTodo = (newTodo: string) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type ToggleComplete = (selectedTodo: Todo) => void;

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type FilterType = "all" | "active" | "completed";

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const handleAdd: AddTodo = (newTodo) => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text !== todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true; // "all" filter
  });

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Header />
      <TodoInput addTodo={handleAdd} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        onRemoveTodo={removeTodo}
      />
      <div className="flex justify-between py-4 px-4 border text-xs md:text-base">
        <span>{`${
          todos.filter((todo) => !todo.completed).length
        } items left`}</span>
        <div className="flex justify-center ">
          <button className="px-2" onClick={() => setFilter("all")}>
            All
          </button>
          <button className="px-2" onClick={() => setFilter("active")}>
            Active
          </button>
          <button className="px-2" onClick={() => setFilter("completed")}>
            Completed
          </button>
        </div>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
      <footer>
        <div className="flex items-center justify-center my-4 px-6 md:px-96">
          <h3>Drag and drop to reorder list</h3>
        </div>
      </footer>
    </div>
  );
};

export default App;
