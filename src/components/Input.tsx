import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const input = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="relative" onSubmit={handleAdd}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        id="text"
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-[300px] p-2.5 absolute bottom-2"
        placeholder="create a todo..."
      />
    </form>
  );
};

export default input;
