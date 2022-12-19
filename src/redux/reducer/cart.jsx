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

import { ADD_CART, REMOVE_ITEM } from "../type";
import { REMOVE, CLEAR_CART } from "../type";

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
        // if item pailai dekhi state.cart ma cha vaney add to cart garda tesko qty matra badako
        state.carts[itemIndex].qty += 1;
      } else {
        // if item pailai dekhi cart ma chaina i.e naya item add garna lako chau vaney chai item lai destructure garera tesma 'qty:1' key value pair add gareko
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state, // initialState destrucutre gareko
          carts: [...state.carts, temp], //then carts ko value lai destructure garera naya value i.e. temp lai add garera return gareko
        };
      }
    // localStorage.setItem("cart", JSON.stringify(state.carts));

    case REMOVE:
      // state.carts ko items ko id lai check gareko and if match garcha vaney teslai hatayera baki lai return gareko
      const data = state.carts.filter(
        (element) => element.id !== action.payload
      );
      return {
        ...state,
        carts: data,
      };

    case REMOVE_ITEM:
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id // action.payload.id vaneko item.id
      );
      if (state.carts[itemIndex_desc].qty >= 1) {
        state.carts[itemIndex_desc].qty -= 1;
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

    case CLEAR_CART:
      state.carts = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};
