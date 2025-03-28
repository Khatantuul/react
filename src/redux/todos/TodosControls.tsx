import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByColor, filterByStatus, markAllCompleted, RootState, todoColorTypes } from "./store";

function TodosControls() {
    const statusTypes = ['All', 'Active', 'Completed']
    const dispatch = useDispatch();
    const remainingActiveTodos = useSelector((state: RootState)=>state.todos).filter(todo=>!todo.completed)
  return (
    <div className="todos-controls">
      <div className="todos-controls__actions" style={{display:'flex', flexDirection:'column'}}>
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

        {todoColorTypes.map((color) => {
          return (
            <div key={color} style={{textAlign:'left'}}>
              <label className="color-filter-list" >
                <input type="checkbox" value={color} onChange={()=>dispatch(filterByColor(color))}/>
                <span style={{display:'inline-block', width: '20px', height:'10px', backgroundColor: color}}></span>
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
