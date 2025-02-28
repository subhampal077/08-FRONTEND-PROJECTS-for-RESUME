import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    }, // action creators
    logout: (state) => {
      state.user = null;
    },
  },
});

// exporting action creators
export const { login, logout } = userSlice.actions;

// exporting useSelector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
