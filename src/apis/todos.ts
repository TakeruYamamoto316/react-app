import axios from "axios";

interface Todo {
  id: number;
  content: string;
  done: boolean;
}

const todoDataUrl = "http://localhost:3100/todos";

export const getAllTodosData = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo: Todo): Promise<Todo> => {
  const response = await axios.post<Todo>(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id: number): Promise<Todo> => {
  const response = await axios.delete<Todo>(`${todoDataUrl}/${id}`);
  return response.data;
};

export const updateTodoData = async (id: number, todo: Todo): Promise<Todo> => {
  const response = await axios.put<Todo>(`${todoDataUrl}/${id}`, todo);
  return response.data;
};
