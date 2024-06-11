import { Global } from '@emotion/react';

function CustomCss() {
  return (
    <Global
      styles={(theme) => ({
        h1: {
          fontSize: theme.h1.fontSize,
          fontWeight: theme.h1.fontWeight,
          fontStyle: theme.h1.fontStyle,
          lineHeight: theme.h1.lineHeight,
          color: theme.text.color,
          margin: 0,
        },
        h3: {
          fontSize: theme.h3.fontSize,
          fontWeight: theme.h3.fontWeight,
          fontStyle: theme.h3.fontStyle,
          lineHeight: theme.h3.lineHeight,
          color: theme.text.color,
          margin: 0,
        },
        h4: {
          fontSize: theme.h4.fontSize,
          fontWeight: theme.h4.fontWeight,
          fontStyle: theme.h4.fontStyle,
          lineHeight: theme.h4.lineHeight,
          color: theme.colors.gray75,
          margin: 0,
        },

        p: {
          color: theme.text.color,
          margin: 0,
        },

        input: {
          fontFamily: theme.fontFamily,
        },

        button: {
          fontFamily: theme.fontFamily,
        },

        '#root': {
          width: '100%',
          height: '100vh',
          overflow: 'overlay',
        },
      })}
    ></Global>
  );
}

export default CustomCss;
