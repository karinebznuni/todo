export default function Options({
  todos,
  onClearCompleted,
  onFilterCompleted,
  onFilterActive,
  onFilterAll,
}) {
  const leftTodos = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <>
      <div className="options">
        <div className="optiions-left-margin">{leftTodos} items left</div>
        <div className="types">
          <div onClick={onFilterAll}>All</div>
          <div onClick={onFilterActive}>Active</div>
          <div onClick={onFilterCompleted}>Completed</div>
        </div>
        <div className="optiions-right-margin" onClick={onClearCompleted}>
          Clear comleted
        </div>
      </div>
    </>
  );
}
