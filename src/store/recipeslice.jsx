import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = recipeSlice.actions;
export default recipeSlice.reducer;
