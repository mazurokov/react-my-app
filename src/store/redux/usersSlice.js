import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
});

const initialState = {
  users: [],
  loading: false,
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUsers = (state) => state.users.users;
export const selectUserCount = (state) => state.users.users.length;

export const selectUsersLoading = (state) => state.users.loading;

export const selectUsersError = (state) => state.users.error;

export const { addUser, removeUser, clearUsers, updateUserName } =
  usersSlice.actions;

export default usersSlice.reducer;
