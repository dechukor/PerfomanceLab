import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import selectedCategory from "./selectedCategorySlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    selectedCategory: selectedCategory,
  },
  middleware: (getDefaultMiddlevare) =>
    getDefaultMiddlevare().concat(productsApi.middleware),
});
