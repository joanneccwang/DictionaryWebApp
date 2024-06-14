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

  h1: {
    fontSize: '64px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  h3: {
    fontSize: '24px',
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  h4: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
};

const darkTheme = {
  ...theme,
  background: theme.colors.black,
  color: theme.colors.white,
  text: {
    color: theme.colors.white,
    secondary: theme.colors.gray75,
  },
  line: {
    bg: theme.colors.gray3A,
  },
  input: {
    bg: theme.colors.gray1F,
    color: theme.colors.white,
  },
  a: {
    color: theme.colors.white,
  },
};

// const lightTheme = {
//   ...theme,
//   background: theme.colors.white,
//   color: theme.colors.gray2D,
//   text: {
//     color: theme.colors.gray2D,
//     secondary: theme.colors.gray75,
//   },
//   line: {
//     bg: theme.colors.grayE9,
//   },
//  input: {
//     bg: theme.colors.grayF4,
//     color: theme.colors.gray2D,
//  },
//  a: {
//     color: theme.colors.gray2D,
//  },
// }

export default darkTheme;
