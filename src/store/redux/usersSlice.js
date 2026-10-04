import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    updateUserName: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload.id);

      if (user) {
        user.name = action.payload.name;
      }
    },

    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, removeUser, clearUsers, updateUserName } =
  usersSlice.actions;

export default usersSlice.reducer;
