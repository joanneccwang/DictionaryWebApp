import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ResetCss from './ResetCss.tsx';
import CustomCss from './CustomCss.tsx';

import { ThemeProvider } from '@emotion/react';
import theme from '@utils/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCss />
      <CustomCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
