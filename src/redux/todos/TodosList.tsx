import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./Todo";
import { RootState, Todo } from "./store";

function TodosList() {
  const todos = useSelector((state: RootState) => state.todos);
  const filterStatus = useSelector((state: RootState) => state.filters.status);
  const filteredTodos = filterStatus === 'Active' ? todos.filter(todo=>!todo.completed): filterStatus === 'Completed' ? todos.filter(todo=>todo.completed) : todos;
    console.log(filteredTodos);
    
  return (
    <ul className="todos-list">
        {
         filteredTodos.map((todo: Todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        }
       
      
     
    </ul>
  );
}

export default TodosList;
