// import { useState } from "react";
import Square from "./Square";
import {type SquareValue } from "./types/SquareValue";



type BoardProps = {
    xIsNext: boolean,
    squares: SquareValue[],
    onPlay: (nextState: SquareValue[]) => void
}

export default function Board({xIsNext, squares, onPlay}: BoardProps) {

  //closure wise this is inner right
  //so obviously can read squares & setsquares
  const handleClick = (idx: number) => {
    if (squares[idx] || getWinner(squares)) return;
    const copySquares = squares.slice();
    if (xIsNext) {
      copySquares[idx] = "X";
      //   history.push(`The player X played at ${idx} idx`);
    } else {
      copySquares[idx] = "O";
    }

    onPlay(copySquares);

    // setSquares(copySquares);
    // setXisNext(!xIsNext);
  };

  const getWinner = (squares: SquareValue[]) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //no need for state here since it will run everytime square clicks and board
  //rerenders, here will be updated
  let status;
  const winner = getWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClickHandler={() => handleClick(0)} />
        <Square value={squares[1]} onClickHandler={() => handleClick(1)} />
        <Square value={squares[2]} onClickHandler={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickHandler={() => handleClick(3)} />
        <Square value={squares[4]} onClickHandler={() => handleClick(4)} />
        <Square value={squares[5]} onClickHandler={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickHandler={() => handleClick(6)} />
        <Square value={squares[7]} onClickHandler={() => handleClick(7)} />
        <Square value={squares[8]} onClickHandler={() => handleClick(8)} />
      </div>

      <div>
        <h3>History</h3>
        <ul></ul>
      </div>
    </>
  );
}
