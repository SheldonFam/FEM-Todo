import React, { useState, ChangeEvent, FormEvent } from "react";

type AddTodo = (newTodo: string) => void;

interface TodoInputProps {
  addTodo: AddTodo;
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo(""); //reset to empty state
  };

  return (
    <div className="pb-3 w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <input
              type="checkbox"
              className="rounded-full w-5 h-5"
              disabled
            ></input>
          </div>
          <input
            type="text"
            name="todo"
            id="text"
            value={newTodo}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 pl-10 py-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
            placeholder="Create a new todo..."
          />
        </div>
      </form>
    </div>
  );
};
