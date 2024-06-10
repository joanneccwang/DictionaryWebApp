import { Global } from '@emotion/react';

function ResetCSS() {
  return (
    <Global
      styles={(theme) => ({
        ':root': {
          backgroundColor: theme.colors.black,
          color: theme.colors.green,
          fontFamily: theme.fontFamily,
          fontOpticalSizing: 'auto',
          fontStyle: 'normal',
          fontWeight: 400,
        },

        'body, html': {
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          minWidth: '100vw',
        },

        '*': {
          boxSizing: 'border-box',
        },

        'input, input:focus, input:focus-visible': {
          border: 'none',
          backgroundImage: 'none',
          backgroundColor: 'none',
          boxShadow: 'none',
          outline: 'none',
        },

        button: {
          border: 'none',
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      })}
    ></Global>
  );
}

export default ResetCSS;
