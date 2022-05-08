import React from "react";
import { useState } from "react";
function TodoList() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  function Add(e) {
    const newtodo = {
      id: new Date().getTime(),
      text: TodoList,
    };
    setTitles([...setTitles]).concat(newtodo);
    setTitle("");
  }
  const AddTitle = () => {
    setTitles((prev) => {
      const newTitle = [...prev, title];
      return newTitle;
    });
    setTitle("");
  };

  return (
    <div className="header">
      <h1>My ToDoList</h1>
      <p>New Todo</p>
      <div className="todo-add">
        <input
          className="todo-add_value"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button onClick={AddTitle}>ADD</button>
      </div>
      <div className="todo-list">
        <p>List Todo</p>
        <ul>
          {titles.map((item, index) => {
            return (
              <li key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
                <div>
                  <button>Update</button>
                  <button>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
