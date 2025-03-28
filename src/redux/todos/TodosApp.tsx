import React from 'react'
import AddTodo from './AddTodo'
import './style.css'
import TodosList from './TodosList'
import TodosControls from './TodosControls'
function TodosApp() {
  return (
    <div className='todos-container'>
        <div>
        <h1>Todos</h1>
        <AddTodo />
        <TodosList/>
        </div>
        <TodosControls />
    </div>
  )
}

export default TodosApp