import { combineReducers } from "redux";
import cartReducer from './cart/cart-reducer';

const rootReducer = combineReducers({
    shop: cartReducer
})

export default rootReducer;