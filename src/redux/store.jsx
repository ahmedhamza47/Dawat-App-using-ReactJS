// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./reducer/cart";
// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

import { createStore } from "@reduxjs/toolkit";
import root from "./reducer/main";
import { useAuth0 } from "@auth0/auth0-react";

function saveToLocalStorage(state) {
  try {
    const cartData = JSON.stringify(state);
    localStorage.setItem("cart", cartData);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const cartData = localStorage.getItem("cart");
    if (cartData === null) return undefined;
    return JSON.parse(cartData);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(root, loadFromLocalStorage());
//called anytime  an action is dispatched (subcribed) method
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
