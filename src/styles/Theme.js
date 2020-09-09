import React from 'react';
import { ThemeProvider } from 'styled-components';

import lightTheme from './light';
import darkTheme from './dark';

const Theme = ({ children, darkMode }) => (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    {children}
  </ThemeProvider>
);

export default Theme;
