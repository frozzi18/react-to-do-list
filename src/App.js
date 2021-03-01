import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // Variable list
  const [list, setList] = useState([]);
  const [inputList, setInputList] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, inputList]);
  };

  function handleSubmitInside(todo) {
    // event.preventDefault();
    console.log(todo);
    const newList = list.map((item) => {
      if (item === todo) {
        const updated_item = inputList;

        return updated_item;
      }

      return item;
    });
    setList(newList);
    setIsEdit(false);
  }

  useEffect(() => {
    console.log(list);
  }, [list]);

  const handleChange = (event) => {
    setInputList(event.target.value);
  };

  const handleDelete = (todo) => {
    setList(list.filter((todo_) => todo_ !== todo));
  };

  function handleEdit(todo) {
    setIsEdit(true);
  }

  const formFirst = () => {
    if (!isEdit) {
      return (
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="todo_list"
              value={inputList}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
        {formFirst()}
        <ul>
          {list.map((todo) => {
            return (
              <>
                <ol>
                  {isEdit ? (
                    <form onSubmit={() => handleSubmitInside(todo)}>
                      <label>
                        <input
                          type="text"
                          name="todo_list"
                          value={inputList}
                          onChange={handleChange}
                        />
                      </label>

                      <input type="submit" value="Submit" />
                    </form>
                  ) : (
                    todo
                  )}{" "}
                  <button type="button" onClick={() => handleDelete(todo)}>
                    Delete
                  </button>
                  <button type="button" onClick={() => handleEdit(todo)}>
                    Edit
                  </button>
                </ol>
              </>
            );
          })}
        </ul>
        <div></div>
        {inputList}
      </header>
    </div>
  );
}

export default App;
