import React from 'react';
import styled from 'styled-components';

import GameCard from './GameCard';

const TopGamesWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2.2em;
`;

const games = [
  {
    rank: 1,
    title: 'Just Chatting',
    watching: 15,
    streams: 76,
  },
  {
    rank: 2,
    title: 'Fall Guys',
    watching: 276,
    streams: 587,
  },
  {
    rank: 3,
    title: 'League of Legends',
    watching: 152,
    streams: 99,
  },
  {
    rank: 4,
    title: 'Fortnite',
    watching: 141,
    streams: 155,
  },
  {
    rank: 5,
    title: 'Grand Theft Auto 5',
    watching: 1431,
    streams: 6502,
  },
  {
    rank: 6,
    title: 'VALORANT',
    watching: 265,
    streams: 285,
  },
];

const TopGames = () => {
  return (
    <TopGamesWrapper>
      {games.map((g, idx) => (
        <GameCard key={idx} game={g} />
      ))}
    </TopGamesWrapper>
  );
};

export default TopGames;
