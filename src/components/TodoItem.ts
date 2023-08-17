import React from "react";

interface Todo {
  id: number;
  content: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodoListItemStatus: (id: number, done: boolean) => void;
  deleteTodoListItem: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodoListItemStatus,
  deleteTodoListItem,
}) => {
  const handleToggleTodoListItemStatus = () =>
    toggleTodoListItemStatus(todo.id, todo.done);
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);

  return (
    <li>
      {todo.content}
      <button onClick={handleToggleTodoListItemStatus}>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  );
};