import React from 'react';

import { default as GlobalStyle } from './styles/Global';
import Theme from './styles/Theme';

import Navbar from './components/Navbar';
import TopGames from './components/TopGames';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <div className='App'>
        <Navbar />
        <TopGames />
      </div>
    </Theme>
  );
};

export default App;
