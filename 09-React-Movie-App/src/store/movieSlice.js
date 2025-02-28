import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // action type
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
  },
});

// action creators
export const { setBannerData } = movieSlice.actions;

export default movieSlice.reducer;
