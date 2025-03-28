import { legacy_createStore } from "redux"

export interface Todo{
    id: number,
    text: string,
    completed: boolean,
    color?: string
}
export interface RootState{
    todos: Todo[],
    filters: {
        status: string,
        colors: []
    }
}

// export const todoColorTypes = ['Green','Blue' ,'Orange' ,'Purple' ,'Red']
export type TodosFilterStatusTypes = 'All'|'Active'|'Completed'
type TodoReducerActionTypes = {type: 'ADD_TODO', payload: ''} | {type: 'DELETE_TODO'} | {
    type: 'ASSIGN_COLOR',
    id: number,
    payload: ''
} | {
    type: "COMPLETE_TODO",
    id: number
} | {
    type: 'MARK_ALL_COMPLETED'
} | {
    type: 'CLEAR_COMPLETED'
} | {
    type: 'FILTER_STATUS',
    payload: string
}


const initialAppState = {
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
        colors: ['Green','Blue' ,'Orange' ,'Purple' ,'Red'],
        status: 'All'
    }
}
function nextId(todos: Todo[]){
    const maxId = todos.reduce((maxId: number, todo: Todo)=>{
        return Math.max(todo.id, maxId)
    }, -1)
    return maxId + 1;
}

export const addTodo = (txt: string)=>{
    return {
        type: 'ADD_TODO',
        payload: txt
    }
}

export const assignColor = (id: number, color: string)=>{
    return {
        type: 'ASSIGN_COLOR',
        id,
        payload: color
    }
}

export const completeTodo = (id: number)=>{
    return {
        type: "COMPLETE_TODO",
        id
    }
}

export const markAllCompleted = () => {
    return {
        type: 'MARK_ALL_COMPLETED'
    }
}

export const clearCompleted = () =>{
    return {
        type: 'CLEAR_COMPLETED'
    }
}
export const filterByStatus = (status: string)=>{
    return {
        type: 'FILTER_STATUS',
        payload: status
    }
}

const todoReducer = (state = initialAppState, action: TodoReducerActionTypes) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, { id: nextId(state.todos), text: action.payload, completed: false}]
            };
        case 'ASSIGN_COLOR':
            return {
                ...state,
                todos: state.todos.map((todo)=>{
                    if(todo.id === action.id){                        
                        return {...todo, color: action.payload}
                    }
                    return todo;
                })
            }
        case 'COMPLETE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo)=>{
                    if(todo.id === action.id){
                        return {...todo, completed: !todo.completed}
                    }
                    return todo;
                })
            }
        case 'MARK_ALL_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo=>{
                    return {...todo, completed: true}
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter((todo)=>!todo.completed)
            }
        case 'FILTER_STATUS':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        default:
            return state;
    }
};

export const todoStore = legacy_createStore(todoReducer);