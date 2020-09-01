import React from 'react';

import { default as GlobalStyle } from './styles/Global';
import Theme from './styles/Theme';

import Container from './components/UI/Container';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Popular from './components/Popular';
import TopGames from './components/TopGames';
import PopularStreams from './components/PopularStreams';
import TrendingStreams from './components/TrendingStreams';
import Footer from './components/Footer';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <div className='App'>
        <Navbar />
        <Container>
          <Header />
          <Popular />
          <TopGames />
          <PopularStreams />
        </Container>
        <TrendingStreams />
        <Footer />
      </div>
    </Theme>
  );
};

export default App;
