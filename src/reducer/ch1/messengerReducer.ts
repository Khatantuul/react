export const initialState = {
    selectedId: 0,
    message: ''
}

type ActionType = 'CHANGE SELECTION' | 'EDIT MESSAGE';
export interface ReducerAction{
    type: ActionType,
    contactId?: number, 
    message?: string
}

export const reducer = (state: typeof initialState, action: ReducerAction) =>{
    switch (action.type){
        case 'CHANGE SELECTION':
            return {...state, selectedId: (action.contactId ?? state.selectedId), message: ''}
        case 'EDIT MESSAGE':
            return {...state, message: action.message ?? ''}
    }
}

//when our selection id is 0 it evaluates to false, thus the first item in data is not getting selected
//Instead of using ? : (ternary operator with a falsy check), use the nullish coalescing operator (??), 
// which only checks for null or undefined
