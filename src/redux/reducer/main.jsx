import { combineReducers } from "redux";
import { cartReducer } from "./cart";
const root = combineReducers({
  cartReducer: cartReducer,
});
export default root;
