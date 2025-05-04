import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryType } from "../types/types";

const initialState: { value: CategoryType | null } = { value: null };

const selectedCategorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    selectCategory(state, action: PayloadAction<CategoryType>) {
      state.value = action.payload;
    },
    clearCategory() {
      return initialState;
    },
  },
});

export const { selectCategory, clearCategory } = selectedCategorySlice.actions;
export default selectedCategorySlice.reducer;
