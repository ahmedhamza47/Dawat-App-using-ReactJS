import { combineReducers } from "redux";
import { CartReducer } from "./cart";
const root = combineReducers({
  cartReducer: CartReducer,
});
export default root;
