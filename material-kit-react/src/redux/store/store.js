import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slice/productSlice";
import CounterReducer from "../slice/counterSlice";

export const Store = configureStore({
  reducer: {
    products: ProductReducer,
    counter: CounterReducer,
  },
});
