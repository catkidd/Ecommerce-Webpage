import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "Counter",
  initialState: {
    id: 0,
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.id = action.payload;
      state.count = state.count + 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;

export default CounterSlice.reducer;
