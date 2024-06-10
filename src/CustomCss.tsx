import { Global } from '@emotion/react';

function CustomCss() {
  return (
    <Global
      styles={(theme) => ({
        h1: {
          fontWeight: 300,
          margin: 0,
        },
        p: {
          color: theme.colors.gray1,
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
          overflow: 'hidden',
        },
      })}
    ></Global>
  );
}

export default CustomCss;
