import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";

type ToggleComplete = (selectedTodo: Todo) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type FilterChange = (filter: Filter) => void;

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  handleClearCompleted: () => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  handleClearCompleted,
}) => {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true; // "all" filter
  });

  const handleFilterChange: FilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const counter = (
    <>
      {filter === "completed"
        ? `${todos.filter((todo) => todo.completed).length} items left`
        : `${todos.filter((todo) => !todo.completed).length} items left`}
    </>
  );

  return (
    <div className="w-full">
      <ul className="flex items-center justify-between flex-col">
        {filteredTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
      <div className="flex justify-between py-4 px-4 border text-xs md:text-base">
        <span>{counter}</span>
        <div className="hidden sm:flex justify-center">
          <button
            className={`px-2 font-bold hover:text-dark-blue ${
              filter === "all" ? "text-bright-blue" : "text-dark-grayish-blue"
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`px-2 font-bold hover:text-dark-blue ${
              filter === "active"
                ? "text-bright-blue"
                : "text-dark-grayish-blue"
            }`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>
          <button
            className={`px-2 font-bold hover:text-dark-blue ${
              filter === "completed"
                ? "text-bright-blue"
                : "text-dark-grayish-blue"
            }`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
        </div>
        <button
          onClick={handleClearCompleted}
          className="text-dark-grayish-blue hover:text-dark-blue"
        >
          Clear Completed
        </button>
      </div>
      {/* <div className="flex justify-center sm:hidden mt-2 border p-4">
        <button
          className={`px-2 font-bold hover:text-dark-blue focus:text-bright-blue ${
            filter === "all" ? "text-blue-500" : "text-dark-grayish-blue"
          }`}
          // onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className="px-2 font-bold text-dark-grayish-blue hover:text-dark-blue focus:text-bright-blue"
          // onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className="px-2 font-bold text-dark-grayish-blue hover:text-dark-blue focus:text-bright-blue"
          // onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div> */}
    </div>
  );
};
