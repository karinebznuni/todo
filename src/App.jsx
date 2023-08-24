import { useEffect, useState, useMemo } from "react";
import "./App.css";
import sun from "./assets/icon-sun.svg";
import moon from "./assets/icon-moon.svg";
import Todos from "./components/Todos";
import AddTasks from "./components/AddTask";
import Options from "./components/Options";

const FILTERS = {
  COMPLETED: "COMPLETED",
  ACTIVE: "ACTIVE",
};

function App() {
  const [isLight, setIsLight] = useState(true);
  const [todos, setTodos] = useState([
    { id: Math.random(), text: "Learn HTML", isCompleted: false },
    { id: Math.random(), text: "Learn CSS", isCompleted: false },
  ]);

  const [filter, setFilter] = useState();

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      switch (filter) {
        case FILTERS.ACTIVE:
          return !todo.isCompleted;
        case FILTERS.COMPLETED:
          return todo.isCompleted;
        default:
          return true;
      }
    });
  }, [todos, filter]);

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
          todos={filteredTodos}
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
          onFilterAll={() => {
            setFilter(undefined);
          }}
          onFilterActive={() => {
            setFilter(FILTERS.ACTIVE);
          }}
          onFilterCompleted={() => {
            setFilter(FILTERS.COMPLETED);
          }}
          onClearCompleted={() => {
            setTodos(todos.filter((todo) => !todo.isCompleted));
          }}
        />
      </div>
    </>
  );
}

export default App;
