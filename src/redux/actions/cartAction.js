import { ADD,REMOVE,RESET } from "./actionsTypes";

export const addToCart = (item)=>{
    return {
        type:ADD,
        Item:item
    }
}


export const removeFromCart = (item)=>{
    return {
        type:REMOVE,
        Item:item
    }
}

export const resetCart = ()=>{
    return {
        type:RESET
    }
}
