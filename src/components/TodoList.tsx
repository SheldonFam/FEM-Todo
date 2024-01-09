import React from "react";
import { TodoListItem } from "./TodoListItem";

// interface Props {
//   todos: Todo[];
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
//   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }

// export const TodoList: React.FC<Props> = ({
//   todos,
//   setTodos,
//   handleClick,
// }: Props) => {
//   const handleDone = (id: number) => {
//     console.log(id);
//   };

//   return (
//     <div className="w-full px-6 md:px-96">
//       {todos.map((todo) => (
//         <ul
//           className="flex items-center border py-3 px-3 justify-between"
//           key={todo.id}
//         >
//           <input
//             type="checkbox"
//             className="mr-3 rounded-full"
//             onClick={() => handleDone(todo.id)}
//           ></input>
//           <li className="list-none flex-1">{todo.todo}</li>
//           <button className="opacity-0 hover:opacity-100" onClick={handleClick}>
//             <HiXMark className="text-3xl" />
//           </button>
//         </ul>
//       ))}
//       <div className="flex justify-between py-4 px-4 border text-xs md:text-base">
//         <span>0 items left</span>
//         <div className="flex justify-center ">
//           <button className="px-2">All</button>
//           <button className="px-2">Active</button>
//           <button className="px-2">Completed</button>
//         </div>
//         <button>Clear Completed</button>
//       </div>
//     </div>
//   );
// };

type ToggleComplete = (selectedTodo: Todo) => void;
type RemoveTodo = (todoToRemove: Todo) => void;
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  onRemoveTodo,
}) => {
  return (
    <div className="w-full px-6 md:px-96">
      <ul className="flex items-center border py-3 px-3 justify-between flex-col">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    </div>
  );
};
