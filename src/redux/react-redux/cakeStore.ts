import { legacy_createStore, combineReducers } from "redux";
import { ReducerAction } from "../types/types";
const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
export const buyCake = (num: number) => {
  return {
    type: BUY_CAKE,
    payload: num,
  };
};
export const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};

export function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

const reducer = (state = initialCakeState, action: ReducerAction<number>) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - (action.payload ?? 0),
      };
    default:
      return state;
  }
};

//passing void to ReducerAction because no action.payload
const iceCreamReducer = (state = initialIceCreamState, action: ReducerAction<void>) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: reducer,
  iceCream: iceCreamReducer,
});

export const store = legacy_createStore(rootReducer);
