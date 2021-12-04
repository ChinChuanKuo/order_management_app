import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    data: {
      width: 0,
      desktop: false,
      tablet: false,
      mobile: false,
    },
  },
  reducers: {
    ondevice: (state, action) => {
      const width = action.payload;
      state.data = {
        width: width - 18,
        desktop: width > 1199.5,
        tablet: width > 889.5,
        mobile: width < 890,
      };
    },
  },
});

export const { ondevice } = deviceSlice.actions;

export default deviceSlice.reducer;
