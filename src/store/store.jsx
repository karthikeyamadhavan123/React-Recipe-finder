import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './recipeslice'; // corrected import name

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export default store;
