import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './light';

// import lightTheme from './lightTheme';
// import darkTheme from './darkTheme';

// const Theme = ({ children, darkMode }) => (
//   <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//     {children}
//   </ThemeProvider>
// );

const Theme = ({ children }) => (
  <ThemeProvider theme={light}>{children}</ThemeProvider>
);

export default Theme;
