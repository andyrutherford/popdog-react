import React from 'react';
import styled from 'styled-components';

import GameCard from './cards/GameCard';
import SeeMoreButton from './UI/SeeMoreButton';

import game1 from '../img/games/game1.jpg';
import game2 from '../img/games/game2.jpg';
import game3 from '../img/games/game3.jpg';
import game4 from '../img/games/game4.jpg';
import game5 from '../img/games/game5.jpg';
import game6 from '../img/games/game6.jpg';
import controller from '../img/game-controller.svg';

const TopGamesWrapper = styled.div`
  position: relative;
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

  .header div {
    position: relative;
  }

  .header div label {
    font-size: 0.75rem;
    font-weight: 300;
    position: absolute;
    top: -25%;
    left: 0%;
    margin-left: 0.75em;
    background-color: ${(props) => props.theme.colors.mainBackground};
    color: ${(props) => props.theme.colors.lineSecondary};
    padding: 0 0.25em;
  }

  .header div select {
    color: ${(props) => props.theme.colors.lineSecondary};
    font-size: 1rem;
    padding-left: 0.5em;
    margin-right: 1em;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 175px);
    gap: 2em;
    justify-content: center;
    position: relative;
    z-index: 0;
  }

  .separator {
    display: flex;
    align-items: center;
    margin-top: 2em;
    padding-top: 2.5em;
    position: relative;
    z-index: 100;
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

    .separator {
      padding-top: 2.5rem;
      margin-top: 2rem;
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
    title: 'Among Us',
    img: game1,
  },
  {
    rank: 2,
    title: 'Just Chatting',
    img: game2,
  },
  {
    rank: 3,
    title: 'League of Legends',
    img: game3,
  },
  {
    rank: 4,
    title: 'Grand Theft Auto V',
    img: game4,
  },
  {
    rank: 5,
    title: 'Call of Duty: Warzone',
    img: game5,
  },
  {
    rank: 6,
    title: 'Fortnite',
    img: game6,
  },
];

const TopGames = () => {
  return (
    <TopGamesWrapper>
      <div className='header'>
        <h1>Top games</h1>

        <div>
          <label htmlFor='sort-by'>Sort by</label>
          <select id='sort-by'>
            <option value='viewers'>Most Viewers</option>
            <option value='streas'>Most Streams</option>
          </select>
        </div>
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
