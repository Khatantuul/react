import { createContext } from "react";

export type Goal = {
    id: number,
  desc: string;
  category: string;
  reps: string,
  achieved: boolean
};

export const initialGoals = [
    { id: 0, desc: "Lift heavy", category: "Strength", reps: '12', achieved: false },
]
export type ReducerAction = {type: "ADD", goal: Goal} | {type: "TOGGLE_ACHIEVE", id: number}


export const reducer =(state: Goal[], action: ReducerAction) =>{
    console.log('coming here');
    
    switch(action.type){
        case "ADD":
            return [...state, action.goal];
        case "TOGGLE_ACHIEVE":
            return state.map((goal)=>{
                if(goal.id === action.id){
                    return {...goal, achieved: !goal.achieved}
                }else{
                    return goal;
                }
            })
    }   
}

 