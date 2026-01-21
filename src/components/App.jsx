import React, { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/inputArea";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => [
      ...prevItems,
      {
        id: Date.now(),
        text: inputText,
        completed: false
      }
    ]);
  }

  function toggleComplete(id) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea addItem={addItem} />

      <ul>
        {items.map(item => (
          <ToDoItem
            key={item.id}
            id={item.id}
            text={item.text}
            completed={item.completed}
            onToggle={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
