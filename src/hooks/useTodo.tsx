import { useState, useEffect } from "react";
import { ulid } from "ulid";
import { Todo } from "../type/TodoType";
import { addTodoData, deleteTodoData } from "../apis/todos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    todoData.getAllTodosData().then((todo: Todo[]) => {
      setTodoList([...todo].reverse());
    });
  }, []);

  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item) => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo: Todo) => {
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

  const deleteTodoListItem = (id: string) => {
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
