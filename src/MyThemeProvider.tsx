import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@emotion/react';

import { lightTheme, darkTheme } from '@utils/theme';
import ResetCss from './ResetCss.tsx';
import CustomCss from './CustomCss.tsx';
import { StoreRootState } from './store/index.ts';

function MyThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(darkTheme);
  const themeType = useSelector<StoreRootState>(
    (state) => state.theme.appTheme
  );

  useEffect(() => {
    if (themeType === 'light') {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, [themeType]);

  return (
    <ThemeProvider theme={theme}>
      <ResetCss />
      <CustomCss />
      {children}
    </ThemeProvider>
  );
}

export default MyThemeProvider;
