import React, { useState } from 'react';

import useSticky from './hooks/useSticky.js';

import { default as GlobalStyle } from './styles/Global';
import Theme from './styles/Theme';

import Container from './components/UI/Container';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Popular from './components/Popular';
import TopGames from './components/TopGames';
import PopularStreams from './components/PopularStreams';
import TrendingStreams from './components/TrendingStreams';
import EsportsMatches from './components/EsportsMatches';
import Footer from './components/Footer';

const App = () => {
  const { isSticky } = useSticky();
  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(
    stored === 'true' ? true : false
  );
  const themeHandler = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  };
  return (
    <Theme darkMode={isDarkMode}>
      <GlobalStyle />
      <div
        className='App'
        style={{ backgroundColor: isDarkMode ? '#0d1113' : '#fff' }}
      >
        <Navbar
          themeHandler={themeHandler}
          isDarkMode={isDarkMode}
          sticky={isSticky}
        />
        <Container>
          <Header />
          <Popular />
          <TopGames />
          <PopularStreams />
        </Container>
        <TrendingStreams />
        <Container>
          <EsportsMatches />
        </Container>
        <Footer />
      </div>
    </Theme>
  );
};

export default App;
