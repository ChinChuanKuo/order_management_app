import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./reducer/account";
import deviceSlice from "./reducer/device";

const configure = configureStore({
  reducer: {
    account: accountReducer,
    device: deviceSlice,
  },
});

export default configure;
