// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     list: [],
//   },
//   reducers: {
//     addItem: (state, { payload }) => {
//       state.list = [...state.list, payload];
//     },
//   },
// });

// export const { addItem } = cartSlice.actions;
// export default cartSlice.reducer;

import { ADD_CART } from "../type";
import { REMOVE } from "../type";

const initialStore = {
  carts: [],
};

export const cartReducer = (state = initialStore, action) => {
  switch (action.type) {
    case ADD_CART:
      /*
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };*/
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case REMOVE:
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };
    default:
      return state;
  }
};
