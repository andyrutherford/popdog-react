import React from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from './light';
import darkTheme from './dark';

// import lightTheme from './lightTheme';
// import darkTheme from './darkTheme';

// const Theme = ({ children, darkMode }) => (
//   <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
//     {children}
//   </ThemeProvider>
// );

const Theme = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
