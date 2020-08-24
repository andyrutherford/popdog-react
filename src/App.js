import React from 'react';

import { default as GlobalStyle } from './styles/Global';
import Theme from './styles/Theme';

import Container from './components/UI/Container';
import Navbar from './components/Navbar';
import TopGames from './components/TopGames';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <div className='App'>
        <Navbar />
        <Container>
          <TopGames />
        </Container>
      </div>
    </Theme>
  );
};

export default App;
