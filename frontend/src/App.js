import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("http://backend:3001/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const handleAddTodo = () => {
    axios
      .post("http://backend:3001/todo", { title: input })
      .then((response) => {
        setTodos([...todos, response.data]);
        setInput("");
      })
      .catch((error) => console.error("Error adding todo:", error));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
