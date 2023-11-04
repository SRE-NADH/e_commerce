import {ADD,REMOVE,RESET } from "../actions/actionsTypes";

const initialState ={
    arr:[],
    total:0
};


const cartReducer = (state=initialState,action)=>{
 switch(action.type){

    case ADD: {
        let arr = state.arr;
        let total = state.total;
        if (arr.some(element => element.id === action.Item.id)) {
            return {...state,arr:[...arr]}; 
          }
        return {arr:[...arr,action.Item],
             total: total+action.Item.price
        }
    }

    case REMOVE:  {
        let arr = state.arr;
        let total = state.total;
        let newArr = arr.filter(item => item.id != action.Item.id);
        return {
            arr:newArr,
            total:total-action.Item.price
        }
    } 
   
    case RESET: return initialState;

    default: return state;
 }
}
export default cartReducer;