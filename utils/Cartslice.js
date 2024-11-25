import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
  name: "appCart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export default Cartslice.reducer;
export const { addItem, removeItem, clearItems } = Cartslice.actions;
