import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function TodosControls() {
    const colors = useSelector((state: RootState)=> state.filters.colors)
  return (
    <div className="todos-controls">
      <div style={{display:'flex', flexDirection:'column'}}>
        <h5>Actions</h5>
        <button>Mark All Completed</button>
        <button>Clear Completed</button>
      </div>
      <div>
        <h5>Remaining Todos</h5>
        <p>1 item left</p>
      </div>
      <div>
        <h5>Filter by Status</h5>
        <ul style={{listStyle: 'none', textAlign:'left', cursor:'pointer'}}>
          <li>All</li>
          <li>Active</li>
          <li>Completed</li>
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
