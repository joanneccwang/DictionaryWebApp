import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// store.subscribe(() => {
//   const value = store.getState();
//   console.log({ value });
// });

export type StoreRootState = ReturnType<typeof store.getState>;

export default store;
