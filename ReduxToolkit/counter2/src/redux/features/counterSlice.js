import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
    incByAmount: (state,actions) => {
        console.log(actions.payload)
      state.value += actions.payload;
    },
  },
});

export const { inc, dec, incByAmount } = counterSlice.actions;
export default counterSlice.reducer;
