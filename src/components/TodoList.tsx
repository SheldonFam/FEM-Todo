import React, { useState, useContext } from "react";
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

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="bg-white dark:bg-[#25273D] rounded-[5px] shadow-md overflow-hidden">
      <div className="divide-y divide-[#E3E4F1] dark:divide-[#393A4B]">
        {filteredTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            onRemove={onRemoveTodo}
          />
        ))}
      </div>

      <div className="flex items-center justify-between px-5 py-4 text-[12px] md:text-[14px] text-[#9495A5] dark:text-[#5B5E7E]">
        <span>{activeTodosCount} items left</span>

        <div className="hidden md:flex items-center gap-4 font-bold">
          <button
            className={`hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
              filter === "all" ? "text-[#3A7CFD]" : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
              filter === "active" ? "text-[#3A7CFD]" : ""
            }`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>
          <button
            className={`hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
              filter === "completed" ? "text-[#3A7CFD]" : ""
            }`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
        </div>

        <button
          className="hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </div>

      {/* Mobile Filter Buttons */}
      <div className="md:hidden mt-4 bg-white dark:bg-[#25273D] rounded-[5px] shadow-md">
        <div className="flex items-center justify-center gap-4 py-4 text-[14px] font-bold text-[#9495A5] dark:text-[#5B5E7E]">
          <button
            className={`hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
              filter === "all" ? "text-[#3A7CFD]" : ""
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
              filter === "active" ? "text-[#3A7CFD]" : ""
            }`}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </button>
          <button
            className={`hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
              filter === "completed" ? "text-[#3A7CFD]" : ""
            }`}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};
