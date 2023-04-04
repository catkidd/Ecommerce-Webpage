import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    id: "",
    title: "",
    description: "",
    brand: "",
    image: "",
    price: 0,
  },
  reducers: {
    addToCart(state, action) {
      // console.log(action.payload);
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.brand = action.payload.brand;
      state.image = action.payload.image;
      state.price = action.payload.price;
    },
  },
});

export const { addToCart } = ProductSlice.actions;

export default ProductSlice.reducer;
