import React, { useState } from "react";
import { assignColor, completeTodo, RootState, Todo, todoColorTypes } from "./store";
import { useDispatch, useSelector } from "react-redux";

function TodoItem({ todo }: {todo: Todo}) {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();
  return (
    <>
      <li>
        <label>
          <input type="checkbox" checked={todo.completed}
          onChange={()=>{
            dispatch(completeTodo(todo.id))
          }} />
          {todo.text}
        </label>
        <div>

        <select onChange={(e)=>{
            setColor(e.target.value);
            dispatch(assignColor(todo.id, e.target.value))
        }}>
            <option defaultValue={todo.color}>{todo.color}</option>
            {todoColorTypes.map((c)=>{

            return <option key={c} value={c}>{c}</option>
            })}
        </select>
        <button>&times;</button> 
        </div>
      </li>
    </>
  );
}

export default TodoItem;
