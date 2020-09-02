import React from 'react';
import styled from 'styled-components';

import gameCover from '../../img/game-cover.jpg';
import streamer1 from '../../img/streamer-1.jpg';
import streamer2 from '../../img/streamer-2.jpg';
import streamer3 from '../../img/streamer-3.jpg';

const GameCardWrapper = styled.div`
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  .btn {
    cursor: pointer;
    border: 0;
    background: ${(props) => props.theme.colors.btnPrimary};
    border-radius: 100vw;
    color: #fff;
    font-weight: bold;
    padding: 0.5em 1.5em;
  }

  .btn:hover {
    box-shadow: rgba(32, 98, 225, 0.25) 0px 4px 4px;
    background: rgb(32, 98, 225) none repeat scroll 0% 0%;
  }

  .game {
    position: relative;
    width: 12.5em;
    cursor: pointer;
  }

  .streamers {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
  }

  .streamers img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }

  .rank {
    position: absolute;
    top: 0;
    right: 1em;
    z-index: 100;
    font-weight: bold;
    font-size: 1.125rem;
    background: rgba(0, 0, 0, 0.65);
    padding: 0.5em 0.5em 0.75em;
    -webkit-clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
    clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
    -webkit-transition: ${(props) => props.theme.colors.clrsecondary};
    transition: transform 200ms cubic-bezier(0.2, 1, 0.8, 1);
  }

  .front {
    -webkit-transition: 250ms;
    transition: 250ms;
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .front .thumbnail {
    border-radius: 0.5em;
  }

  .front .name {
    margin: 0.75em 0;
    font-weight: 600;
    font-size: 1em;
  }

  .front .stats {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .front .streamers img {
    border: 2px solid ${(props) => props.theme.colors.mainBackground};
  }

  .front .streamers img:nth-of-type(1) {
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
    z-index: 1;
  }

  .front .streamers img:nth-of-type(2) {
    -webkit-transform: translateX(25%);
    transform: translateX(25%);
  }

  .back {
    opacity: 0;
    position: absolute;
    top: 55%;
    left: 0;
    right: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 1.5em;
    -webkit-transform: translateY(35%);
    transform: translateY(35%);
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .back .streaming-info {
    -webkit-columns: 2;
    columns: 2;
    -webkit-column-rule: 1px solid rgba(255, 255, 255, 0.25);
    column-rule: 1px solid rgba(255, 255, 255, 0.25);
  }

  .back .game-stat {
    font-size: 1.125rem;
    text-align: center;
  }

  .back .game-stat span {
    font-size: 0.7rem;
    font-weight: 300;
    display: block;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  .background {
    background: green;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0;
    -webkit-transform: scale(0.2, 0.9);
    transform: scale(0.2, 0.9);
    border-radius: 0.5em;
  }

  .game:hover .rank {
    -webkit-transform: translate(150%, -67%);
    transform: translate(150%, -67%);
  }

  .game:hover .front {
    -webkit-transform: translateY(-30%) scale(0.8);
    transform: translateY(-30%) scale(0.8);
  }

  .game:hover .front .name {
    -webkit-animation: gameName 250ms forwards;
    animation: gameName 250ms forwards;
  }

  .game:hover .front .stats {
    opacity: 0;
  }

  .game:hover .back {
    opacity: 1;
    -webkit-transition: opacity 150ms linear, -webkit-transform 200ms ease;
    transition: opacity 150ms linear, -webkit-transform 200ms ease;
    transition: transform 200ms ease, opacity 150ms linear;
    transition: transform 200ms ease, opacity 150ms linear,
      -webkit-transform 200ms ease;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  .game:hover .back .streamers {
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .game:hover .back .streamer {
    font-size: 0.9rem;
  }

  .game:hover .back .name {
    font-weight: bold;
  }

  .game:hover .background {
    -webkit-transition: transform 200ms cubic-bezier(0.2, 1, 0.8, 1),
      opacity 100ms linear;
    transition: transform 200ms cubic-bezier(0.2, 1, 0.8, 1),
      opacity 100ms linear;
    opacity: 1;
    -webkit-transform: scale(1.35, 1.3) translateY(5%);
    transform: scale(1.35, 1.3) translateY(5%);
  }

  @-webkit-keyframes gameName {
    0% {
      text-align: left;
      opacity: 1;
    }
    20% {
      text-align: left;
      opacity: 0;
    }
    50% {
      text-align: center;
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      text-align: center;
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }

  @keyframes gameName {
    0% {
      text-align: left;
      opacity: 1;
    }
    20% {
      text-align: left;
      opacity: 0;
    }
    50% {
      text-align: center;
      opacity: 0;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      text-align: center;
      opacity: 1;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

const GameCard = ({ game }) => {
  return (
    <GameCardWrapper>
      {' '}
      <div className='game'>
        <div className='rank' style={{ width: '29px', textAlign: 'center' }}>
          {game.rank}
        </div>
        <div className='front'>
          <img className='thumbnail' src={gameCover} alt='' />
          <h3 className='name'>{game.title}</h3>
          <div className='stats'>
            <p className='viewers'>539.9k</p>
            <div className='streamers'>
              <img src={streamer1} alt='' />
              <img src={streamer2} alt='' />
              <img src={streamer3} alt='' />
            </div>
          </div>
        </div>
        <div className='back'>
          <div className='streaming-info'>
            <p className='game-stat'>
              {game.watching}
              <span>Watching</span>
            </p>
            <p className='game-stat'>
              {game.streams}
              <span>Streams</span>
            </p>
          </div>
          <button className='btn'>See more streams</button>
          <div className='streamers'>
            <div className='streamer'>
              <div className='icon'>
                <img src={streamer1} alt='' />
              </div>
              <p className='name'>Gamer 1</p>
              <p className='number'>36.1k</p>
            </div>
            <div className='streamer'>
              <div className='icon'>
                <img src={streamer2} alt='' />
              </div>
              <p className='name'>Gamer 2</p>
              <p className='number'>32.2k</p>
            </div>
            <div className='streamer'>
              <div className='icon'>
                <img src={streamer3} alt='' />
              </div>
              <p className='name'>Gamer 3</p>
              <p className='number'>17.3k</p>
            </div>
          </div>
        </div>

        <div className='background'></div>
      </div>
    </GameCardWrapper>
  );
};

export default GameCard;
