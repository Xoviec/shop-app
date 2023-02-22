import { combineReducers } from "redux";
import cartReducer from "./app/cartItems/duck";

const rootReducer = combineReducers({
    cartItems: cartReducer
})


export default rootReducer