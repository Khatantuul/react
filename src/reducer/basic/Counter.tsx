import { ChangeEvent, useReducer, useState } from "react";

const initialState = {
  count: 0,
  text: "",
};

type CounterActionType = "INCREMENT" | "DECREMENT" | "RESET" | "NEW_INPUT";
type CounterAction = {
  type: CounterActionType;
  payload?: string;
};

const reducer = (state: typeof initialState, action: CounterAction) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "NEW_INPUT":
      return { ...state, text: action.payload ?? '' };
    default:
      throw new Error("Invalid action");
  }
};

export default function Counter() {
  // const [count, setCount] = useState(0);

  //setting up the reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  //reducer function we have to provide is the logic for state updates
  //reducer func is a pure func that takes (state, action) => newState
  //when we use the dispatch, we ask to dispatch an action to my reducer

  const handleInput = (txt: string) =>{
    dispatch({type: 'NEW_INPUT', payload: txt})
  }

  return (
    <>
      <h1>Current count: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
      <br/>
      <div>
        <label>Enter text:{' '}
          <input type="text" onChange={(e)=> handleInput(e.target.value)} />
        </label>
        <p>{state.text}</p>
      </div>
    </>
  );
}
