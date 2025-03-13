import { useState } from "react";
import Square from "./Square";

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))

    const handleClick = (idx: number) =>{
        const copySquares = squares.slice();
        copySquares[idx] = 'X';
        setSquares(copySquares);
    }
    
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onClickHandler={()=>handleClick(0)}/>
        <Square value={squares[1]} onClickHandler={()=>handleClick(1)}/>
        <Square value={squares[2]} onClickHandler={()=>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickHandler={()=>handleClick(3)}/>
        <Square value={squares[4]} onClickHandler={()=>handleClick(4)}/>
        <Square value={squares[5]} onClickHandler={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickHandler={()=>handleClick(6)}/>
        <Square value={squares[7]} onClickHandler={()=>handleClick(7)}/>
        <Square value={squares[8]} onClickHandler={()=>handleClick(8)}/>
      </div>
    </>
  );
}
