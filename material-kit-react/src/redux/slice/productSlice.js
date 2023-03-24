// import { createSlice } from "@reduxjs/toolkit";

// export const ProductSlice = createSlice({
//   name: "Product",
//   initialState: {
//     id: "",
//     title: "",
//     description: "",
//     brand: "",
//     image: "",
//     price: 0,
//     totalPrice: 0,
//     count:0,
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.id = action.payload.id;
//       state.title = action.payload.title;
//       state.description = action.payload.description;
//       state.brand = action.payload.brand;
//       state.image = action.payload.image;
//       state.price = action.payload.price;
//       // state.totalPrice = action.payload.counter * action.payload.price;
//     },
//     setCounter: (state, action) => {
//      increment: (state) => {
//             state.count = state.count + 1;
//         },
//         decrement: (state) => {
//             state.count = state.count - 1;
//         }
//     }
//   },
// });

// export const { addToCart } = ProductSlice.actions;

// export default ProductSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    id: "",
    title: "",
    description: "",
    brand: "",
    image: "",
    price: 0,
    totalPrice: 0,
    count: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.brand = action.payload.brand;
      state.image = action.payload.image;
      state.price = action.payload.price;
      // state.totalPrice = action.payload.counter * action.payload.price;
    },
    // increment: (state, action) => {
    //   state.count = state.count + 1;
    // },
    // decrement: (state) => {
    //   if (state.count > 0) {
    //     state.count--;
    //   }
    // },
  },
});

export const { addToCart } = ProductSlice.actions;

export default ProductSlice.reducer;
