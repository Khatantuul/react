import { useReducer, useState } from "react";
import "./style.css";

type Item = {
  id: number;
  name: string;
  checked: boolean;
};
const originalItems: Item[] = [
  { id: 1, name: "Kosher", checked: true },
  { id: 2, name: "Celery", checked: false },
  { id: 3, name: "Egg", checked: false },
];

type ReducerActionType = 'TOGGLE SELECT' | 'TOGGLE ALL';
interface ReducerAction {
    type: ReducerActionType,
    id?: number,
    isAllChecked?: boolean
}

const reducer = (state: typeof originalItems, action: ReducerAction) =>{
    switch(action.type){
        case 'TOGGLE SELECT':
            
            return state.map((item: Item)=>{
                if(action.id === item.id){
                    return {...item, checked: !item.checked}
                }
                return item;
            })
        case 'TOGGLE ALL':
            return state.map((item: Item)=>{
                return {...item, checked: !action.isAllChecked}
            })
    }
}


export default function FormWithReducer() {
const [items, dispatch] = useReducer(reducer, originalItems);
  const selectedValues = items
    .filter((item: Item) => item.checked)
    .map((i: Item) => i.name);

  const isAllChecked = selectedValues.length === items.length;
  
  return (
    <>
      <div className="form">
        <div className="form__selectedValue">
          <span>Selected Values: {selectedValues.join(", ")}</span>
        </div>
        <SelectAll isAllChecked={isAllChecked} onToggle={()=>dispatch({type: 'TOGGLE ALL', isAllChecked})} />
        {items.map((item: Item) => {
          return (
            <SelectInput
              key={item.id}
              item={item}
              onToggle={()=>dispatch({type: 'TOGGLE SELECT', id: item.id })}
            />
          );
        })}
        <hr />
        <div className="form__controls">
          <button>Clear All</button>
        </div>
      </div>
    </>
  );
}

interface SelectAllProps{
    isAllChecked: boolean,
    onToggle: ()=>void;
}

function SelectAll({ isAllChecked, onToggle }: SelectAllProps) {
  return (
    <div className="input-container">
      <label>
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={() => onToggle()}
        />{" "}
        Select All
      </label>
    </div>
  );
}

interface SelectInputProps{
    item: Item,
    onToggle: (id: number) => void;
}
function SelectInput({ item, onToggle }: SelectInputProps) {
  return (
    <div className="input-container">
      <label>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />{" "}
        {item.name}
      </label>
    </div>
  );
}

