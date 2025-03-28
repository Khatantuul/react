import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Todo";
import { RootState, Todo } from "./store";

function TodosList() {
  const filterColors = useSelector((state: RootState) => state.filters.colors);

  const selectFilteredTodos = useSelector((state: RootState) => {
    const { todos, filters } = state;
    const filterStatus = filters.status;
    return filterStatus === "Active"
      ? todos.filter((todo) => !todo.completed)
      : filterStatus === "Completed"
      ? todos.filter((todo) => todo.completed)
      : todos;
  });
  const selectColorFilteredTodos =
    filterColors.length === 0
      ? selectFilteredTodos
      : selectFilteredTodos.filter(
          (todo) => todo.color && filterColors.includes(todo.color)
        );

  return (
    <ul className="todos-list">
      {selectColorFilteredTodos.map((todo: Todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodosList;
