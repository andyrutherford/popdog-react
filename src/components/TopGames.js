import React from 'react';
import styled from 'styled-components';

import GameCard from './cards/GameCard';
import SeeMoreButton from './UI/SeeMoreButton';

import controller from '../img/game-controller.svg';

const TopGamesWrapper = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.textPrimary};
    font: 600 2rem / 48px Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: -2px;
    margin-bottom: 1rem;
  }
  select {
    height: 40px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    border-color: ${(props) => props.theme.colors.linePrimary};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .header {
    margin-bottom: 1.5em;
  }
  .content {
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1.5em;
  }

  .separator {
    margin-top: 10rem;
    display: flex;
    align-items: center;
  }

  .separator-btn {
    width: 100%;
  }

  .separator-line {
    display: none;
  }

  .separator-line hr {
    width: 100%;
    border: 0.5px solid rgb(227, 232, 235);
  }

  .separator-btn a:before {
    width: 18px;
    height: 18px;
    display: inline-block;
    content: '';
    -webkit-mask: url(${controller}) no-repeat 50% 50%;
    mask: url(${controller}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background: ${(props) => props.theme.colors.btnPrimary};
    vertical-align: text-top;
    margin-right: 0.5em;
  }

  .separator-btn a:hover:before {
    background: #fff;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0;
    }
    select {
      width: 200px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .separator div {
    }
    .separator-line {
      display: block;
      flex: 1 1 0%;
    }

    .separator-btn {
      width: 200px;
      margin-left: 1rem;
      margin-right: 1rem;
    }
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
      <div className='separator'>
        <div className='separator-line'>
          <hr />
        </div>
        <div className='separator-btn'>
          <SeeMoreButton href='#!'>See More Games</SeeMoreButton>
        </div>
        <div className='separator-line'>
          <hr />
        </div>
      </div>
    </TopGamesWrapper>
  );
};

export default TopGames;
