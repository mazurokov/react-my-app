import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },

    incrementBy: (state, action) => {
      state.count += action.payload;
    },

    decrement: (state) => {
      state.count -= 1;
    },

    decrementBy: (state, action) => {
      state.count -= action.payload;
    },

    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {
  increment,
  decrement,
  setCount,
  reset,
  incrementBy,
  decrementBy
} = counterSlice.actions;

export default counterSlice.reducer;
