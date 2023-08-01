import "./Todos.css";
import cross from "../assets/icon-cross.svg";
import checked from "../assets/icon-check.svg";

export default function Todos({ todos, onRemove, onChangeStyles, onEdit }) {
  return (
    <>
      <div className="tasks">
        {todos.map((todo) => {
          return (
            <div className="task" key={todo.id}>
              <div
                className="circle"
                style={{
                  background: todo.isCompleted
                    ? `linear-gradient(
                    to bottom,
                    hsl(192, 100%, 67%),
                    hsl(280, 87%, 65%)`
                    : "white",
                }}
                onClick={() => {
                  onChangeStyles(todo);
                }}
              >
                {todo.isCompleted && (
                  <img src={checked} alt="check" className="checked-icon" />
                )}
              </div>
              <div
                className="todo-text"
                style={{
                  color: todo.isCompleted ? "purple" : "white",
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
                onClick={() => {
                  onEdit(todo);
                }}
              >
                {todo.text}
              </div>

              <img
                src={cross}
                alt="cross"
                className="cross"
                onClick={() => {
                  onRemove(todo);
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
