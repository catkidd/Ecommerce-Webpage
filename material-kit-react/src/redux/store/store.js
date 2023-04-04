import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slice/productSlice";

export const Store = configureStore({
  reducer: {
    products: ProductReducer,
  },
});
