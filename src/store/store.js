import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice.js";
import usersSlice from "./redux/usersSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersSlice,
  },
});
