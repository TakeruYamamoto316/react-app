import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";

interface Todo {
  id: number;
  content: string;
  done: boolean;
}

interface TodoListProps {
  todoList: Todo[];
  toggleTodoListItemStatus: (id: number, done: boolean) => void;
  deleteTodoListItem: (id: number) => void;
  title: string;
  as: string;
}

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
}) => {
  return (
    <>
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
            {todoList.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};