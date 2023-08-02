import { useEffect, useState } from "react";
import "./App.css";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import Todos from "./components/Todos";
import AddTasks from "./components/AddTask";
import Options from "./components/Options";

function App() {
  const [isLight, setIsLight] = useState(true);
  const [todos, setTodos] = useState([
    { id: Math.random(), text: "Learn HTML", isCompleted: false },
    { id: Math.random(), text: "Learn CSS", isCompleted: false },
  ]);

  const changeTheme = () => {
    if (isLight) {
      setIsLight((isLight) => !isLight);
      document.body.classList.remove("light");
    } else {
      setIsLight((isLight) => !isLight);
      document.body.classList.add("light");
    }
  };
  useEffect(() => {
    if (document.body.classList.contains("light")) {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  });

  return (
    <>
      <div className="bg-image"></div>
      <div className="container">
        <div className="header">
          <h3 className="title">TODO</h3>

          <img onClick={changeTheme} src={isLight ? sun : moon} />
        </div>
        <AddTasks
          onAdd={(text) => {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                isCompleted: false,
              },
            ]);
          }}
        />
        <Todos
          todos={todos}
          onRemove={(todo) => {
            setTodos(todos.filter((t) => t.id !== todo.id));
          }}
          onChangeStyles={(todo) => {
            const updatedTodos = todos.map((item) => {
              if (item.id === todo.id) {
                return {
                  ...item,
                  isCompleted: !item.isCompleted,
                };
              }
              return item;
            });
            setTodos(updatedTodos);
          }}
        />
        <Options
          todos={todos}
          onClearCompleted={() => {
            setTodos(todos.filter((todo) => !todo.isCompleted));
          }}
          onFilterCompleted={() => {
            setTodos(todos.filter((todo) => todo.isCompleted));
          }}
        />
      </div>
    </>
  );
}

export default App;
