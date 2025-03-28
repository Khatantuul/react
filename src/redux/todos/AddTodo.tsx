import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './store';

function AddTodo() {
    const [text, setText] = useState('')
    const dispatch = useDispatch();
    function handleAdd(){
        if(text.trim()){

            dispatch(addTodo(text))
            setText('')
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key === 'Enter'){
            handleAdd()
        }
    }
  return (
    <div>
        <input type="text" placeholder='What needs to be done?' value={text} 
        onChange={(e)=>setText(e.target.value)} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default AddTodo