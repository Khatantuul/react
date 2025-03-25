import { useState } from "react";

interface UseReducerProps<S, A>{
    reducer: (state: S, action: A) => S,
    initialState: S
}

export function useReducer<S, A>(reducer: (state: S, action: A)=>S, initialState: S): [S, (action: A)=>void]{
    const [state, setState] = useState<S>(initialState);

    function dispatch(action: A){
        setState(prevState => reducer(prevState, action))
    }

    return [state, dispatch];
}