import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { ThemeContext } from "../context/Theme";

type AddTodo = (newTodo: string) => void;

interface TodoInputProps {
  addTodo: AddTodo;
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const { theme } = useContext(ThemeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo(""); //reset to empty state
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6">
            <div
              className={`w-5 h-5 border rounded-full ${
                theme === "light" ? "border-[#E3E4F1]" : "border-[#393A4B]"
              }`}
            ></div>
          </div>
          <input
            type="text"
            name="todo"
            id="text"
            value={newTodo}
            onChange={handleChange}
            className={`block w-full pl-16 pr-4 py-4 rounded-[5px] text-[14px] shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] dark:shadow-[0_35px_50px_-15px_rgba(0,0,0,0.5)] ${
              theme === "light"
                ? "bg-white text-[#393A4B] placeholder-[#9495A5]"
                : "bg-[#25273D] text-[#C8CBE7] placeholder-[#767992] border-none"
            }`}
            placeholder="Create a new todo..."
          />
        </div>
      </form>
    </div>
  );
};
