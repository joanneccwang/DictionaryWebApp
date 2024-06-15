import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    appTheme: 'dark',
  },
  reducers: {
    toggleTheme: (state, action) => {
      const targetTheme = action.payload;
      state.appTheme = targetTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
