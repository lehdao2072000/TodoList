import React from "react";
import { useState } from "react";

const TodoList = () => {
  // dataTitles , setDataTitles
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const [todoTitleUpdate, setTodoTitleUpdate] = useState(null);
  // nameUpdate
  const [titleUpdate, setTitleUpdate] = useState("");
  // name search
  const [titleSearch, setTitleSearch] = useState("");

  const DELETE = "DELETE";
  const ADD = "ADD";
  const CONFIG_CRUD = {
    DELETE: DELETE,
    ADD: ADD,
  };

  const addTitle = () => {
    const newtitles = {
      id: Math.floor(Math.random() * 1000),
      text: title,
    };
    setTitles([...titles].concat(newtitles));
    setTitle("");
  };
  //chưa làm được
  /*
  const caseFnCrud = (caseFn) => {
    const caseName = caseFn;
    switch (caseName) {
      case caseName === CONFIG_CRUD.ADD:
        const newTitle = {
          id: Math.floor(Math.random() * 1000),
          Text: title,
        };
        console.log(newTitle);
        setTitles([...titles].concat(newTitle));
        setTitle("");
        break;
      case CONFIG_CRUD.DELETE === caseFn:
        // xử lý code
        //AddTitle();

        break;
      default:
        break;
    }
  };*/
  // caseFnCrud(DELETE);

  const deleteTitle = (id) => {
    const update = [...titles].filter((title) => title.id !== id);
    setTitles(update);
  };

  const updateTitle = (id) => {
    const update = [...titles].map((title) => {
      if (title.id === id) {
        title.text = titleUpdate;
      }
      return title;
    });
    setTitles(update);
    setTodoTitleUpdate(null);
    //setTitleUpdate("");
  };

  const searchTitle = () => {
    const update = [...titles].filter((title, index) => {
      console.log(
        title.text.toLowerCase().includes(titleSearch.toLocaleLowerCase())
      );
      if (title.text.toLowerCase().includes(titleSearch.toLocaleLowerCase())) {
        return (
          <li key={title.id}>
            <span>{index + 1}</span>

            {todoTitleUpdate === title.id ? (
              <div>
                <input
                  type="text"
                  name="updateTextTodo"
                  value={titleUpdate}
                  onChange={(e) => setTitleUpdate(e.target.value)}
                />
                <button onClick={() => updateTitle(title.id)}>Done</button>
              </div>
            ) : (
              <p>{title.text}</p>
            )}

            <div>
              <button
                onClick={() => {
                  setTodoTitleUpdate(title.id);
                  setTitleUpdate(title?.text || "");
                }}
              >
                Update
              </button>

              <button onClick={() => deleteTitle(title.id)}>Delete</button>
            </div>
          </li>
        );
      }
    });
    setTitles(update);
  };
  //<button onClick={() => caseFnCrud(ADD)}>ADD</button>
  return (
    <div className="header">
      <h1>My ToDoList</h1>
      <div className="todo-add">
        <input
          className="todo-add_value"
          type="text"
          value={titleSearch}
          name="titleSearchTodo"
          onChange={(e) => setTitleSearch(e.target.value)}
        />
        <button onClick={() => searchTitle()}>Search</button>
      </div>
      <p>New Todo</p>
      <div className="todo-add">
        <input
          className="todo-add_value"
          type="text"
          value={title}
          name="textTodo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={() => addTitle()}>ADD</button>
      </div>
      <div className="todo-list">
        <p>List Todo</p>
        <ul>
          {titles.map((titles, index) => {
            return (
              <li key={titles.id}>
                <span>{index + 1}</span>

                {todoTitleUpdate === titles.id ? (
                  <div>
                    <input
                      type="text"
                      name="updateTextTodo"
                      value={titleUpdate}
                      onChange={(e) => setTitleUpdate(e.target.value)}
                    />
                    <button onClick={() => updateTitle(titles.id)}>Done</button>
                  </div>
                ) : (
                  <p>{titles.text}</p>
                )}

                <div>
                  <button
                    onClick={() => {
                      console.log("titles", titles);
                      setTodoTitleUpdate(titles.id);
                      // const tt = titles?.find(
                      //   (title) => title?.id === titles?.id
                      // );
                      // console.log("value", tt);
                      setTitleUpdate(titles?.text || "");
                    }}
                  >
                    Update
                  </button>

                  <button onClick={() => deleteTitle(titles.id)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
