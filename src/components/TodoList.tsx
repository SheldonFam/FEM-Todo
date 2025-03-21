import React, { useState, useContext } from "react";
import { TodoListItem } from "./TodoListItem";
import { ThemeContext } from "../context/Theme";

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
  const { theme } = useContext(ThemeContext);

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
        ? `${todos.filter((todo) => todo.completed).length} completed items`
        : `${todos.filter((todo) => !todo.completed).length} items left`}
    </>
  );

  return (
    <div className="space-y-4">
      <div
        className={`relative w-full rounded-[5px] overflow-hidden shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)] ${
          theme === "light" ? "bg-white" : "bg-[#25273D]"
        }`}
      >
        <ul className="divide-y divide-[#E3E4F1] dark:divide-[#393A4B]">
          {filteredTodos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              onRemoveTodo={onRemoveTodo}
            />
          ))}
        </ul>

        {todos.length > 0 && (
          <div
            className={`flex items-center justify-between px-5 py-4 text-[14px] border-t ${
              theme === "light"
                ? "bg-white text-[#9495A5] border-[#E3E4F1]"
                : "bg-[#25273D] text-[#5B5E7E] border-[#393A4B]"
            }`}
          >
            <span>{counter}</span>
            <div className="flex items-center gap-5">
              <button
                className={`transition-colors hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
                  filter === "all" ? "text-[#3A7CFD]" : ""
                }`}
                onClick={() => handleFilterChange("all")}
              >
                All
              </button>
              <button
                className={`transition-colors hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
                  filter === "active" ? "text-[#3A7CFD]" : ""
                }`}
                onClick={() => handleFilterChange("active")}
              >
                Active
              </button>
              <button
                className={`transition-colors hover:text-[#494C6B] dark:hover:text-[#E3E4F1] ${
                  filter === "completed" ? "text-[#3A7CFD]" : ""
                }`}
                onClick={() => handleFilterChange("completed")}
              >
                Completed
              </button>
            </div>
            <button
              onClick={handleClearCompleted}
              className="transition-colors hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"
            >
              Clear Completed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
