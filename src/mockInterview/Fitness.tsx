import { useReducer, useState } from "react";
import "./style.css";
import {Goal, initialGoals, reducer} from './reducer'
import { useGoalGontext } from "./context";
const categories = [
  {
    name: "Strength",
    unit: "reps",
  },
  {
    name: "Cardio",
    unit: "mins",
  },
];



export default function FitnessTracker() {
 
//   const [goals, setGoals] = useState<Goal[]>([]);
const {goals, dispatch} = useGoalGontext();
const [goalData, setGoalData] = useState({
    id: goals.length + 1,
    desc: "",
    category: "Strength",
    reps: "",
    achieved: false
  })
  function handleAdd() {
    dispatch({type: "ADD", goal: {...goalData}})
  }

//   function handleAchieved(id: number){
//     setGoals(goals.map((goal)=>{
//         if(goal.id === id){
//             return {...goal, achieved: !goal.achieved}
//         }else{
//             return goal;
//         }
//     }))
//   }

  return (
    <div className="tracker-container">
      <h2>Fitness Goal Tracker</h2>
      <div className="tracker-input">
        <label>Fitness Goal</label>
        <input
          type="text"
          placeholder="Enter fitness goal"
          value={goalData.desc}
          onChange={(e) => setGoalData({...goalData, desc: e.target.value})}
        />
      </div>
      <div className="tracker-input">
        <label>Category</label>
        <select
        value={goalData.category}
          onChange={(e) => {
            setGoalData({...goalData, category: e.target.value})
          }}
        >
          {categories.map((category) => {
            return (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="tracker-input">
        <label>Repititions</label>
        <input
          type="text"
          placeholder="Enter repetitions"
          value={goalData.reps}
          onChange={(e) => setGoalData({...goalData, reps: e.target.value})}
        />
      </div>
      <button className="tracker-addBtn" onClick={() => handleAdd()}>
        Add Goal
      </button>
      {goals.map((goal) => {
        return (
          <div key={goal.id} className="tracker-achieve">
            <p>
              {goal.desc} - {goal.category} (
              {goal.reps} {goal.category === 'Strength' ? 'reps': 'mins'}){" "}
            </p>
            <button onClick={()=>dispatch({type: "TOGGLE_ACHIEVE", id: goal.id})}>{goal.achieved ? 'Reset' :'Mark as Achieved' }</button>
          </div>
        );
      })}
    </div>
  );
}
