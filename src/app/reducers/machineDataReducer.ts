import { actionType } from "../types";

const defaultState = {
    products: [],
    withdraw: [],
    count: 1,
    balance: 0
};
'setUserBalance'
export const machineDataReducer = (state = defaultState, action: actionType) => {
    switch(action.type) {
    case 'SET_PRODUCT_DATA': 
        return { ...state, products: action.payload };
    case 'SET_MACHINE_WITHDRAW': 
        return { ...state, withdraw: action.payload };
    case 'SET_MACHINE_BALANCE':
        return { ...state, balance: action.payload };
    case 'SET_PRODUCT_COUNT':
        return { ...state, count: action.payload };
    default:
        return state;
    }
};