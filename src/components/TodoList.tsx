import React from "react";
import { TodoListItem } from "./TodoListItem";

type ToggleComplete = (selectedTodo: Todo) => void;
type RemoveTodo = (todoToRemove: Todo) => void;

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  handleClearCompleted: () => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  filter,
  setFilter,
  handleClearCompleted,
}) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true; // "all" filter
  });

  return (
    <div className="w-full px-6 md:px-96">
      <ul className="flex items-center border py-3 px-3 justify-between flex-col">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
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
    </div>
  );
};
