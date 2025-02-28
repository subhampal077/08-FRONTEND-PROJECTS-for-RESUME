import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
