import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartStore",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload?.id,
      );

      if (existingItem) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload?.id) {
            return {
              ...item,
              quantity: (item.quantity ?? 1) + (action.payload?.quantity ?? 1),
            };
          }
          return item;
        });
      } else
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
    },
    // removeItem,
    // incrementQuantity,
    // decrementQuantity,
    // clearCart,
  },
});

export const selectCart = (state) => state.cart.cart;

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
