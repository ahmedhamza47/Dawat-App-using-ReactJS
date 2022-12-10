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

import { useEffect } from "react";
import { ADD_CART, REMOVE_ITEM } from "../type";
import { REMOVE } from "../type";

const initialStore = {
  carts: [],
};

export const CartReducer = (state = initialStore, action) => {
  // useEffect(() => {
  //   console.log("cart");
  //   // localStorage.setItem("cart", JSON.stringify(state.carts));
  // });
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
    // localStorage.setItem("cart", JSON.stringify(state.carts));

    case REMOVE:
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };
    case REMOVE_ITEM:
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_desc].qty >= 1) {
        const delete_item = (state.carts[itemIndex_desc].qty -= 1);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
