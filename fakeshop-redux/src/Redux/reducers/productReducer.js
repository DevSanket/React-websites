import { ActionTypes } from "../contants/action-types"

const initialState = {
    products:[
        
    ]
}
export const productReducer = (state = initialState,action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state
    }
}

export const selectedProductReducer = (state={},{type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCTS:
            return  {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return  {};
        default:
            return state;
    }
}