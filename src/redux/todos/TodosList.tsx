import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Todo";
import { RootState, Todo } from "./store";

function TodosList() {
    const {todos, filters} = useSelector((state: RootState) => state);
  const filterStatus = filters.status;
  const filteredTodos = filterStatus === 'Active' ? todos.filter(todo=>!todo.completed): filterStatus === 'Completed' ? todos.filter(todo=>todo.completed) : todos;
  const filterColors = filters.colors;
  const filteredByColorTodos = filterColors.length === 0 ? filteredTodos : filteredTodos.filter(todo=>todo.color && filterColors.includes(todo.color))
  return (
    <ul className="todos-list">
        {
         filteredByColorTodos.map((todo: Todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        }
    </ul>
  );
}

export default TodosList;
