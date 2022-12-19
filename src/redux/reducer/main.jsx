import { combineReducers } from "redux";
import { CartReducer } from "./cart";
const root = combineReducers({
  //conbine reducer is an object hence we write in key: value format
  cartReducer: CartReducer,
});
export default root;
