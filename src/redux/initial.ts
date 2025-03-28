import { legacy_createStore, combineReducers } from 'redux';
//action and action creator (function)
const BUY_CAKE = 'BUY CAKE'
const BUY_ICECREAM = 'BUY ICECREAM'

const buyCakeAction = {
    type: BUY_CAKE,
}
const buyIceCreamAction = {
    type: BUY_ICECREAM,
}

function buyCake(){
    return buyCakeAction
}

//initial state
// const initialState = {
//     numOfCakes: 10
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

interface CakeReducerAction{
    type: string,
}

const cakeReducer = (state = initialCakeState, action: CakeReducerAction) => {
    switch(action.type){
        case BUY_CAKE:
            return {...state, numOfCakes: state.numOfCakes - 1}
        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreamState, action: CakeReducerAction) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {...state, numOfCakes: state.numOfIceCreams - 1}
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})
//store - now store becomes object (single store) of objects(states)
//{ cake: { numOfCakes: 10 }, icecream: { numOfIceCreams: 20 } }
const store = legacy_createStore(rootReducer)
console.log(store.getState());
store.dispatch(buyCake()) //by using action creator func here, if we were to pass the action obj, we would need
//to modify everywhere we use dispatch.
console.log(store.getState().icecream.numOfIceCreams);

