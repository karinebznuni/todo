import { useState } from "react";

export default function AddTasks({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <>
      <form
        className="add-task"
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(text);
          setText("");
        }}
      >
        <div className="circle"></div>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>
    </>
  );
}
