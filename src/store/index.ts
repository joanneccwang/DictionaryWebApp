import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

export type StoreRootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// store.subscribe(() => {
//   const value = store.getState();
//   console.log({ value });
// });

export default store;
