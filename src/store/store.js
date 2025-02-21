import { configureStore } from "@reduxjs/toolkit";
import leafReducer from "../feature/leafSlice";
export const store = configureStore({
  reducer: {
    leaf: leafReducer,
  },
});
