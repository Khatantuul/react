import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { buyCake, buyIceCream } from "./cakeStore";
import { Dispatch } from "redux";
import { OwnProps, RootState } from "../types/types";

interface CakeContainerProps{
  numOfCakes: number,
  specialOffer: string,
  buyCake: (num: number) => void,
  isSpecial: boolean
}

function CakeContainer({numOfCakes, specialOffer, buyCake, isSpecial}: CakeContainerProps) {
// function CakeContainer({level}) {
  const [cakeAmount, setCakeAmount] = useState(1);
  // const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // const dispatch = useDispatch();

  // const handleBuyCake = (amount)=>{
  //   dispatch(buyCake(amount)); //passing action payload
  // }

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
    
      <p>{specialOffer}</p>
      <input
        type="text"
        placeholder="Number of cakes to buy"
        value={cakeAmount}
        onChange={(e) => setCakeAmount(Number(e.target.value))}
      />
      {/* <button onClick={() => handleBuyCake(cakeAmount)}>Buy cake</button> */}
      <button onClick={()=>buyCake(cakeAmount)}>Buy cake</button>
    </div>
  );
}

function mapStateToProps(state: RootState, ownProps: OwnProps){
  //using ownProps we can gather diff or more state from the store or create another prop
  return {
    numOfCakes: state.cake.numOfCakes,
    specialOffer: ownProps.isSpecial ? 'Buy 1 Get 1 free' : 'Regular Price'
  }
}
function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps){
  const dispatchFunc = ownProps.cake ? (num: number) => dispatch(buyCake(num)) :
  () => dispatch(buyIceCream())

  return {
    buyItem: dispatchFunc
  }
  // return {
  //   buyCake: (num) => dispatch(buyCake(num))
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
// export default CakeContainer;

//Important: connect(null, mapDispatchToProps) 
//this denotes that the comp is purely going to dispatch actions, not subscribing to store state
//cause the comp is not displaying state 

//whereas connect(mapStateToProps, null)
//comp is purely presentational  