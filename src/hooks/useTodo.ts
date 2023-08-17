import { useState, useEffect } from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos";

interface Todo {
  id: string;
  content: string;
  done: boolean;
}

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    todoData.getAllTodosData().then((todo) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  };

  const addTodoListItem = (todoContent: string) => {
    const newTodoItem: Todo = {
      content: todoContent,
      id: ulid(),
      done: false,
    };

    addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };

  const deleteTodoListItem = (id: number) => {
    deleteTodoData(id).then(() => {
      const newTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(newTodoList);
    });
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
