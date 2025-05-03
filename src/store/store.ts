import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import selectedCategory from "./selectedCategorySlice";
import cart from "./cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    selectedCategory: selectedCategory,
    cart: cart,
  },
  middleware: (getDefaultMiddlevare) =>
    getDefaultMiddlevare().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
