import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ResetCss from './ResetCss.tsx';
import CustomCss from './CustomCss.tsx';

import { ThemeProvider } from '@emotion/react';

const theme = {
  colors: {
    green: '#54E6AF',
    greenHover: '#B3FFE2',
    black: '#121725',
    gray3: '#2C344B',
    gray2: '#5A668A',
    gray1: '#C2CBE5',
    white: '#FFFFFF',
    red: '#FB3E3E',
  },
  borderRadius: '28px',
  fontFamily: 'Chivo, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCss />
      <CustomCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
