import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { Goal, initialGoals, reducer, ReducerAction } from "./reducer";


interface GoalContext {
    goals: Goal[],
    dispatch: Dispatch<ReducerAction>
}
const GoalContext = createContext<GoalContext>({
    goals: initialGoals,
    dispatch: () => {},
});

export default function GoalContextProvider({children}: {children: ReactNode}){
    const [goals, dispatch] = useReducer(reducer, initialGoals)
    return (
        <GoalContext.Provider value={{goals, dispatch}}>
            {children}

        </GoalContext.Provider>
    );
}

export function useGoalGontext(){
    const context = useContext(GoalContext);
    if(context === undefined) throw new Error("Wrap the provider around your comps")
    return context;
}