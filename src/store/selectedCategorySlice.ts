import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryType } from "../types/types";

const initialState: { value: CategoryType } = { value: null };

const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    selectCategory(state, action: PayloadAction<CategoryType>) {
      state.value = action.payload;
    },
  },
});

export const { selectCategory } = selectedCategorySlice.actions;
export default selectedCategorySlice.reducer;
