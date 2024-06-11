const theme = {
  colors: {
    black: '#050505',
    gray1F: '#1F1F1F',
    gray2D: '#2D2D2D',
    gray3A: '#3A3A3A',
    gray75: '#757575',
    grayE9: '#E9E9E9',
    grayF4: '#F4F4F4',
    white: '#FFFFFF',
    purple: '#A445ED',
    red: '#FF5252',
  },

  borderRadius: '16px',

  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
};

const darkTheme = {
  ...theme,
  background: theme.colors.black,
  color: theme.colors.white,
  text: {
    color: theme.colors.white,
  },
};

// const lightTheme = {
//   ...theme,
//   background: theme.colors.white,
//   color: theme.colors.gray2D,
//   text: {
//     color: theme.colors.gray2D,
//   }
// }

export default darkTheme;
