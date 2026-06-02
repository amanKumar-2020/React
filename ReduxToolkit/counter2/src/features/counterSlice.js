import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const couterSlicer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
       state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increment_By: (state, action) => {
      state.value += action.payload;
    },
    decrement_By: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, increment_By, decrement_By } = couterSlicer.actions;

export default couterSlicer.reducer;
