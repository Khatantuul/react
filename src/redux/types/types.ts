export interface ReducerAction<T>{
    type: string,
    payload? : T
}

export interface RootState{
    cake: {
        numOfCakes: number
    },
    iceCream: {
        numOfIceCreams: number
    }
}

export interface OwnProps{
    isSpecial?: boolean,
    cake?: boolean
}