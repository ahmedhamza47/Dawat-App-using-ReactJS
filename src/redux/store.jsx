// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./reducer/cart";
// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

import { createStore } from "@reduxjs/toolkit";
import root from "./reducer/main";

const store = createStore(root);
export default store;
