import { useState } from "react";
import Board from "./Board";
import { type SquareValue } from "./types/SquareValue";

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // const [xIsNext, setXisNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0);
    //because when move(step in history) changes, rerender will happen
    //and when its even X, odd O is next player and this can determine
    //xIsNext so no need for redundant state
    const xIsNext = currentMove % 2 === 0;
    const currentStage = history[currentMove];
    

    function handleGame(nextStage: SquareValue[]){
        const newHistory = [...history.slice(0,currentMove + 1), nextStage]
        setHistory(newHistory);
        setCurrentMove(newHistory.length - 1);
        // setXisNext(!xIsNext);
    }

    function jumpTo(nextMove: number){
        setCurrentMove(nextMove);
        // setXisNext(nextMove % 2 === 0);
    }

    const moves = history.map((_, move)=>{
        let description;
        if(move > 0){
            description = 'Go to move #' + move;
        }else{
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{description}</button>
            </li>
        );
    })

    return (
        <>
        <div>
        <Board xIsNext={xIsNext} squares={currentStage} onPlay={handleGame}/>

        </div>
        <div>
            <ol>{moves}</ol>
        </div>
        </>
    );
}