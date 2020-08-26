import React from 'react';

import { default as GlobalStyle } from './styles/Global';
import Theme from './styles/Theme';

import Container from './components/UI/Container';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Popular from './components/Popular';
import TopGames from './components/TopGames';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <div className='App'>
        <Navbar />
        <Container>
          <Header />
          <Popular />
          <hr style={{ border: '0.5px solid #e3e8eb' }} />
          <TopGames />
        </Container>
      </div>
    </Theme>
  );
};

export default App;
