import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Todo";
import { RootState, Todo } from "./store";

function TodosList() {
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);

  return (
    <ul className="todos-list">
      {todos.map((todo: Todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodosList;
