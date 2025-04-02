import { DraggableProvidedDragHandleProps } from "react-beautiful-dnd";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoListItemProps {
  todo: Todo;
  toggleComplete: (todo: Todo) => void;
  onRemove: (todo: Todo) => void;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
}

export const TodoListItem = ({
  todo,
  toggleComplete,
  onRemove,
  dragHandleProps,
}: TodoListItemProps) => {
  return (
    <div
      className="group flex items-center px-5 h-[52px] md:h-[64px] bg-white dark:bg-[#25273D] cursor-move"
      {...dragHandleProps}
    >
      {/* <div className="px-4 cursor-move text-[#CACDE8] dark:text-[#4D5067] hover:text-[#494C6B] dark:hover:text-[#E3E4F1]"></div> */}
      <button
        onClick={() => toggleComplete(todo)}
        className={`relative flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full border-2 ${
          todo.completed
            ? "bg-gradient-to-br from-[#57DDFF] to-[#C058F3]"
            : "border-[#E3E4F1] dark:border-[#393A4B]"
        }`}
      >
        {todo.completed && (
          <svg width="11" height="9" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
        {!todo.completed && (
          <span className="absolute inset-[1px] rounded-full bg-white dark:bg-[#25273D]" />
        )}
      </button>

      <span
        className={`flex-1 ml-3 md:ml-6 text-[12px] md:text-[18px] ${
          todo.completed
            ? "text-[#D1D2DA] dark:text-[#4D5067] line-through"
            : "text-[#494C6B] dark:text-[#C8CBE7]"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onRemove(todo)}
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
};
