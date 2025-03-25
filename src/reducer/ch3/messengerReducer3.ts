export const initialState: {
    selectedId: number,
    messages: Record<number,string>
} = {
    selectedId: 0,
    messages: {}
}

type ActionType = 'CHANGE SELECTION' | 'EDIT MESSAGE' | 'SEND MESSAGE';
export interface ReducerAction{
    type: ActionType,
    contactId?: number, 
    message?: string
}

export const reducer = (state: typeof initialState, action: ReducerAction) =>{
    switch (action.type){
        case 'CHANGE SELECTION':
            return {...state, selectedId: (action.contactId ?? state.selectedId)}
        case 'EDIT MESSAGE':
        case 'SEND MESSAGE':
            return {...state, messages: {...state.messages, [state.selectedId]: action.message ?? '' } }
        // case 'SEND MESSAGE':
        //     return {...state, message: action.message ?? ''}
    }
}

//when our selection id is 0 it evaluates to false, thus the first item in data is not getting selected
//Instead of using ? : (ternary operator with a falsy check), use the nullish coalescing operator (??), 
// which only checks for null or undefined
