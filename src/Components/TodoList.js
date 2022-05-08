import React from "react";
import { useState } from "react";
function TodoList() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const [todotitleUpdate, settodoTitleUpdate] = useState(null);
  const [titleUpdate, setTitleUpdate] = useState("");
  ///
  function AddTitle() {
    const newtitles = {
      id: Math.floor(Math.random() * 1000),
      text: title,
    };
    setTitles([...titles].concat(newtitles));
    setTitle("");
  }
  //
  function DeleteTitle(id) {
    const update = [...titles].filter((title) => title.id !== id);
    setTitles(update);
  }

  function UpdateTitle(id) {
    const update = [...titles].map((title) => {
      if (title.id === id) {
        title.text = titleUpdate;
      }
      return title;
    });
    setTitles(update);
    settodoTitleUpdate(null);
    setTitleUpdate("");
  }

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
        />
        <button onClick={AddTitle}>ADD</button>
      </div>
      <div className="todo-list">
        <p>List Todo</p>
        <ul>
          {titles.map((titles, index) => {
            return (
              <li key={titles.id}>
                <span>{index + 1}</span>

                {todotitleUpdate == titles.id ? (
                  <div>
                    <input
                      type="text"
                      value={titleUpdate}
                      onChange={(e) => setTitleUpdate(e.target.value)}
                    />
                    <button onClick={() => UpdateTitle(titles.id)}>Done</button>
                  </div>
                ) : (
                  <p>{titles.text}</p>
                )}

                <div>
                  <button onClick={() => settodoTitleUpdate(titles.id)}>
                    Update
                  </button>

                  <button onClick={() => DeleteTitle(titles.id)}>Delete</button>
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
