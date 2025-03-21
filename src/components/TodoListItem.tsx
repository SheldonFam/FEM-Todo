import React, { useContext } from "react";
import { HiXMark } from "react-icons/hi2";
import { ThemeContext } from "../context/Theme";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type ToggleComplete = (selectedTodo: Todo) => void;

type RemoveTodo = (todoToRemove: Todo) => void;

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  onRemoveTodo,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li
      className={`flex items-center w-full px-5 py-4 group ${
        theme === "light" ? "bg-white" : "bg-[#25273D]"
      }`}
    >
      <div
        onClick={() => toggleComplete(todo)}
        className={`flex-shrink-0 w-5 h-5 mr-3 rounded-full border cursor-pointer transition-colors ${
          todo.completed
            ? "bg-gradient-to-br from-[#57DDFF] to-[#C058F3] flex items-center justify-center border-none"
            : theme === "light"
            ? "border-[#E3E4F1] hover:border-[#C058F3]"
            : "border-[#393A4B] hover:border-[#C058F3]"
        }`}
      >
        {todo.completed && (
          <svg
            className="w-2.5 h-2.5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span
        className={`flex-grow text-[14px] ${
          todo.completed
            ? theme === "light"
              ? "line-through text-[#D1D2DA]"
              : "line-through text-[#4D5067]"
            : theme === "light"
            ? "text-[#494C6B]"
            : "text-[#C8CBE7]"
        }`}
      >
        {todo.text}
      </span>
      <button
        className={`opacity-0 group-hover:opacity-100 transition-opacity ml-2 ${
          theme === "light" ? "text-[#494C6B]" : "text-[#5B5E7E]"
        }`}
        onClick={() => onRemoveTodo(todo)}
      >
        <HiXMark className="w-4 h-4" />
      </button>
    </li>
  );
};
