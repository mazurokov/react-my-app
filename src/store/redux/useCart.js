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

    removeItem: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;

      const item = state.cart.find((item) => item.id === id);

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const selectCartCount = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
