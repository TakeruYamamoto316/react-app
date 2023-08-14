import axios from "axios";
import React, { useState, useEffect } from "react";

const todoDataUrl = "https://localhost:3100/todos";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  }, []);

  console.log("TODOリスト：", todoList);

  return (
    <>
      <h1>TODO進捗管理</h1>
      <textarea />
      <button>+ TODOを追加</button>
      <h2>TODOリスト</h2>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.content}({todo.done ? "完了" : "未完了"})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
