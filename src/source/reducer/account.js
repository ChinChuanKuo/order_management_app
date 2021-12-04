import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    data: {},
  },
  reducers: {
    signin: (state, action) => {
      state.data = action.payload;
    },
    signout: (state) => {
      state.data = {};
    },
  },
});

export const { signin, signout } = accountSlice.actions;

export default accountSlice.reducer;
