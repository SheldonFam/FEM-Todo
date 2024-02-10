import React, { ReactNode } from "react";
import { TodoListItem } from "./TodoListItem";

type ToggleComplete = (selectedTodo: Todo) => void;
type RemoveTodo = (todoToRemove: Todo) => void;

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
  filter: Filter;
  setFilter: (filter: Filter) => void;
  handleClearCompleted: () => void;
  counter: ReactNode;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
  filter,
  setFilter,
  handleClearCompleted,
  counter,
}) => {
  return (
    <div className="w-full px-6 md:px-96">
      <ul className="flex items-center justify-between flex-col">
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
        <span>{counter}</span>
        <div className="flex justify-center ">
          <button
            className={`px-2 font-bold hover:text-dark-blue focus:text-bright-blue ${
              filter === "all" ? "text-blue-500" : "text-dark-grayish-blue"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="px-2 font-bold text-dark-grayish-blue hover:text-dark-blue focus:text-bright-blue"
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className="px-2 font-bold text-dark-grayish-blue hover:text-dark-blue focus:text-bright-blue"
            onClick={() => setFilter("completed")}
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
    </div>
  );
};
