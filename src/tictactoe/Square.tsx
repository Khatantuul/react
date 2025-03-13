import "./style.css";

type SquareProps ={
    value: 'X' | 'O' | null,
    onClickHandler: () => void //this is not the handleClick with the parameter
    //its the anonymous thats wrapping so we cannot type idx : number cause
    //its the mouseevent 
}

export default function Square({value, onClickHandler}: SquareProps) {

  return <button className="square" onClick={onClickHandler}>{value}</button>;
}
