import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";
import { Todo } from "../type/TodoType";

interface TodoListProps {
  todoList: Todo[];
  toggleTodoListItemStatus: (id: string, done: boolean) => void;
  deleteTodoListItem: (id: string) => void;
  title: string;
  as: "h1" | "h2" | undefined;
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
