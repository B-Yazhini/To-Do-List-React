import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => props.onToggle(props.id)}
      style={{
        textDecoration: props.completed ? "line-through" : "none",
        cursor: "pointer"
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
