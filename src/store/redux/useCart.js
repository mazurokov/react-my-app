import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cartStore",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const { id, quantity = 1, ...itemData } = action.payload ?? {};

      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        return;
      }

      state.cart.push({
        ...itemData,
        id,
        quantity,
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
