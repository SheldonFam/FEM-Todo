import React from "react";
import { HiXMark } from "react-icons/hi2";

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
  return (
    <li className="list-none flex flex-row items-center w-full border p-3 first:rounded-t-md">
      <input
        type="checkbox"
        className="mr-1 rounded-full cursor-pointer"
        onClick={() => toggleComplete(todo)}
      />
      <input
        className="w-full border-none active:border-none focus:border-none"
        type="text"
        value={todo.text}
        disabled
      />
      <button
        className="opacity-0 hover:opacity-100"
        onClick={() => onRemoveTodo(todo)}
      >
        <HiXMark className="text-2xl text-dark-grayish-blue" />
      </button>
    </li>
  );
};
