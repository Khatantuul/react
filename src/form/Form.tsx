import { useState } from "react";
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

export default function Form() {
  const [items, setItems] = useState<Item[]>(originalItems);
  const selectedValues = items
    .filter((item) => item.checked)
    .map((i) => i.name);

  const isAllChecked = selectedValues.length === items.length;
  
  const handleSelectToggle = (id: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };
  const handleSelectAll = () => {
   setItems(items.map(item=> {
    return {...item, checked: !isAllChecked}
   }))
  };
  return (
    <>
      <div className="form">
        <div className="form__selectedValue">
          <span>Selected Values: {selectedValues.join(", ")}</span>
        </div>
        <SelectAll isAllChecked={isAllChecked} onToggle={handleSelectAll} />
        {items.map((item) => {
          return (
            <SelectInput
              key={item.id}
              item={item}
              onToggle={handleSelectToggle}
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

//one revelation is that whether to keep items/data in the state or
//have separate selectedIds in the state
//since each item in items contain the toggleable info, if we kept separate 
//selectedIds, that info is duplcated
//read in notes
