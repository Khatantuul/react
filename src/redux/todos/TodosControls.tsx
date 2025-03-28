import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByStatus, markAllCompleted, RootState } from "./store";

function TodosControls() {
    const colors = useSelector((state: RootState)=> state.filters.colors)
    const statusTypes = ['All', 'Active', 'Completed']
    const dispatch = useDispatch();
    const remainingActiveTodos = useSelector((state: RootState)=>state.todos).filter(todo=>!todo.completed)
  return (
    <div className="todos-controls">
      <div style={{display:'flex', flexDirection:'column'}}>
        <h5>Actions</h5>
        <button onClick={()=>dispatch(markAllCompleted())}>Mark All Completed</button>
        <button>Clear Completed</button>
      </div>
      <div>
        <h5>Remaining Todos</h5>
        <p>{remainingActiveTodos.length} items left</p>
      </div>
      <div>
        <h5>Filter by Status</h5>
        <ul style={{listStyle: 'none', textAlign:'left', cursor:'pointer'}}>
          {
            statusTypes.map(status => {
                return <li key={status} onClick={()=> dispatch(filterByStatus(status))}>{status}</li>
            })
          }
        </ul>
      </div>
      <div >
        <h5>Filter by Color</h5>

        {colors.map((color) => {
          return (
            <div key={color} style={{textAlign:'left'}}>
              <label >
                <input type="checkbox" />
                {color}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodosControls;
