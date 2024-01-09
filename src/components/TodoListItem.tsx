import React, { useState } from "react";
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
  //   const [isEditOn, setIsEditOn] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(todo.text);

  const onDelete = () => {
    onRemoveTodo(todo);
  };

  return (
    <li className="list-none flex-row">
      <input
        type="checkbox"
        className="mr-3 rounded-full"
        onClick={() => toggleComplete(todo)}
      />
      <input
        className="edit-input"
        type="text"
        value={inputText}
        onChange={() => console.log("value")}
      />
      <button className="opacity-0 hover:opacity-100" onClick={onDelete}>
        <HiXMark className="text-3xl" />
      </button>
    </li>
  );
};
/* <div className="flex justify-between py-4 px-4 border text-xs md:text-base">
        <span>0 items left</span>
        <div className="flex justify-center ">
          <button className="px-2">All</button>
          <button className="px-2">Active</button>
          <button className="px-2">Completed</button>
        </div>
        <button>Clear Completed</button>
      </div> */
