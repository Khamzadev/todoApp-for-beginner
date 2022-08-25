import React, { useState } from "react";

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  };

  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveTodo = (id) => {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item
    });
    setTodo(newTodo);
    setEdit(null)
  };

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input onChange={(e) => setValue(e.target.value)} value={value} />
            </div>
          ) : (
            <div
              style={{ textDecoration: item.status ? "line-through" : "none" }}
            >
              {item.title}
            </div>
          )}
          {edit === item.id ? (
            <div>
              <button onClick={() => saveTodo(item.id)}>Сохранить</button>
            </div>
          ) : (
            <div>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button onClick={() => editTodo(item.id, item.title)}>
                Edit
              </button>
              <button onClick={() => statusTodo(item.id)}>Done</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
