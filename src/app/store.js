import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// Global Stroe Setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
