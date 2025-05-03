import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Products } from "../types/types";

const initialState: Products = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<{ id: number }>) {
      const id = action.payload.id;
      return state.filter((product) => product.id !== id);
    },
    clearCart() {
      return initialState;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
