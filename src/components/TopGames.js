import React from 'react';
import styled from 'styled-components';

import GameCard from './GameCard';

const TopGamesWrapper = styled.div`
  margin-top: 50px;

  h1 {
    font: 700 40px / 48px Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: -2px;
  }
  select {
    height: 40px;
    width: 200px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5em;
  }
  .content {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 2.2em;
  }
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
  // {
  //   rank: 6,
  //   title: 'VALORANT',
  //   watching: 265,
  //   streams: 285,
  // },
];

const TopGames = () => {
  return (
    <TopGamesWrapper>
      <div className='header'>
        <h1>Top Games</h1>
        <select>
          <option value='A'>Most Viewers</option>
          <option value='B'>Most Streams</option>
        </select>
      </div>
      <div className='content'>
        {games.map((g, idx) => (
          <GameCard key={idx} game={g} />
        ))}
      </div>
    </TopGamesWrapper>
  );
};

export default TopGames;
