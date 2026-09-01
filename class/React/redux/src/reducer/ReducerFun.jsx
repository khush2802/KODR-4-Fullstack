import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    counter: 0,
  },

  reducers: {
    incCount: (state) => {
      state.counter += 1;
    },

    decCount: (state) => {
      state.counter -= 1;
    },
  },
});

export const { incCount, decCount } = counterSlice.actions;

export default counterSlice.reducer;