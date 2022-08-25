import React, { useState } from "react";

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState();
  const saveTodo = () => {
    setTodo([
      ...todo,
      {
        id: 4,
        title: value,
        status: false,
      },
    ]);
  };

  return (
    <div>
      <input
        placeholder="Enter title task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Add Task</button>
    </div>
  );
};

export default AddTodo;
