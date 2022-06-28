import * as actionTypes from './cart-types';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}

export const adjustQtyInc = (itemID) => {
    return {
        type: actionTypes.ADJUST_QTY_INC,
        payload: {
            id: itemID
        }
    }
}

export const adjustQtyDec = (itemID) => {
    return {
        type: actionTypes.ADJUST_QTY_DEC,
        payload: {
            id: itemID
        }
    }
}

export const currentItem = (item) => {
    return {
        type: actionTypes.CURRENT_ITEM,
        payload: item
    }
}
