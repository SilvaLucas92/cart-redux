import * as actionTypes from './cart-types';
import data from '../../data';

const INITIAL_STATE = {
    products: data,
    cart:[],
    currentItem: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(pdt => pdt.id === action.payload.id);
            const itemInCart = state.cart.find(item => item.id === action.payload.id? true : false);
            return {
                ...state,
                cart: itemInCart? 
                    state.cart.map((item) => { return item.id === action.payload.id? {...item, qty: item.qty + 1} : item})
                    :
                    [...state.cart, {...item, qty: 1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((pdt) => { return pdt.id !== action.payload.id })
            }
        case actionTypes.ADJUST_QTY_INC:
            return {
                ...state,
                cart: state.cart.map((pdt) => { return pdt.id === action.payload.id? {...pdt, qty: pdt.qty + 1}
                    :
                    pdt
                })
            }
        case actionTypes.ADJUST_QTY_DEC:
            return {
                ...state,
                cart: state.cart.map((pdt) => { return pdt.id === action.payload.id? {...pdt, qty: pdt.qty > 0 ? pdt.qty - 1 : pdt.qty}
                    :
                    pdt
                })
            }        
        case actionTypes.CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state;    
    }
}

export default cartReducer;