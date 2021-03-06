import React from 'react';
import styled from 'styled-components';

import random from '../../utils/random';

import streamer1 from '../../img/streamer-1.jpg';
import streamer2 from '../../img/streamer-2.jpg';
import streamer3 from '../../img/streamer-3.jpg';
import user from '../../img/user.svg';
import play from '../../img/play.svg';

const GameCardWrapper = styled.div`
  position: relative;
  :hover {
    z-index: 100;
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
    width: 11.5em;
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

  .streamer .icon {
    display: inline-block;
    width: 2em;
    height: 2em;
    position: relative;
    transition: transform ease-in-out 100ms;
  }

  .streamer:hover .icon {
    transform: translateY(-10%);
  }

  .streamer:hover .icon::before {
    opacity: 1;
  }

  .streamer .icon:hover {
    transform: translateY(-10%) scale(1.1);
  }

  .icon::before,
  .icon::after {
    opacity: 0;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50vh;
  }

  .icon::before {
    background: #f00;
    background-image: url(${play});
    background-size: 0.1em;
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    place-items: center;
    font-size: 5em;
    z-index: 10;
    transition: opacity 50ms linear, background-color 100ms linear;
  }

  .icon:hover::before {
    background-color: #cc0202;
  }

  .icon:hover::after {
    background: #f00;
    z-index: 1;
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.9);
      opacity: 0.75;
    }
    100% {
      transform: scale(1.5);
      opacity: 0%;
    }
  }

  .rank {
    position: absolute;
    top: 0;
    right: 1em;
    z-index: 99;
    color: #f5eee7;
    font-weight: bold;
    font-size: 1.125rem;
    background: rgba(0, 0, 0, 0.65);
    padding: 0.5em 0.5em 0.75em;
    -webkit-clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
    clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
    -webkit-transition: ${(props) => props.theme.colors.clrsecondary};
    transition: transform 150ms cubic-bezier(0.2, 1, 0.8, 1);
  }

  .front {
    -webkit-transition: 150ms;
    transition: 150ms;
    color: ${(props) => props.theme.colors.textPrimary};
    position: relative;
    z-index: 10;
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
    color: ${(props) => props.theme.colors.textSecondary};
    font-size: 0.85em;
    font-weight: 300;
  }

  .front .stats .viewers {
    display: flex;
    align-items: center;
  }

  .front .stats .viewers:before {
    width: 1.25em;
    height: 1.25em;
    display: inline-block;
    content: '';
    -webkit-mask: url(${user}) no-repeat 50% 50%;
    mask: url(${user}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background: ${(props) => props.theme.colors.textSecondary};
    vertical-align: text-top;
    margin-right: 0.25em;
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
    z-index: 1;
  }

  .back .streaming-info {
    -webkit-columns: 2;
    columns: 2;
    -webkit-column-rule: 0.5px solid
      ${(props) => props.theme.colors.textSecondary};
    column-rule: 0.5px solid ${(props) => props.theme.colors.textSecondary};
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

  .card-background {
    background: ${(props) => props.theme.colors.hoverSecondary};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    opacity: 0;
    -webkit-transform: scale(0.2, 0.9);
    transform: scale(0.2, 0.9);
    border-radius: 0.5em;
    overflow: hidden;
    -webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .card-background img {
    opacity: 0.3;
    height: 21%;
    width: 100%;
    object-fit: cover;
    object-position: top center;
    clip-path: url(#wave);
  }

  .game:hover .rank {
    -webkit-transform: translate(135%, -56%);
    transform: translate(135%, -56%);
  }

  .game:hover .front {
    -webkit-transform: translateY(-30%) scale(0.8);
    transform: translateY(-30%) scale(0.8);
  }

  .game:hover .front .name {
    -webkit-animation: gameName 150ms forwards;
    animation: gameName 150ms forwards;
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

  .game:hover .card-background {
    -webkit-transition: transform 150ms cubic-bezier(0.2, 1, 0.8, 1),
      opacity 150ms linear;
    transition: transform 150ms cubic-bezier(0.2, 1, 0.8, 1),
      opacity 150ms linear;
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
      text-align: center;
      opacity: 1;
    }
    20% {
      text-align: center;
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
      <div className='game'>
        <div className='rank' style={{ width: '29px', textAlign: 'center' }}>
          {game.rank}
        </div>
        <div className='front'>
          <img className='thumbnail' src={game.img} alt='' />
          <h2 className='name'>{game.title}</h2>
          <div className='stats'>
            <p className='viewers'>{random()}</p>
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
              {random()}
              <span>Watching</span>
            </p>
            <p className='game-stat'>
              {random()}
              <span>Streams</span>
            </p>
          </div>
          <button className='btn'>See more streams</button>
          <div className='streamers'>
            <div className='streamer'>
              <div className='icon'>
                <img src={streamer1} alt='' />
              </div>
              <p className='name'>xQcOW</p>
              <p className='number'>{random()}</p>
            </div>
            <div className='streamer'>
              <div className='icon'>
                <img src={streamer2} alt='' />
              </div>
              <p className='name'>Mizkif</p>
              <p className='number'>{random()}</p>
            </div>
            <div className='streamer'>
              <div className='icon'>
                <img src={streamer3} alt='' />
              </div>
              <p className='name'>scoped</p>
              <p className='number'>{random()}</p>
            </div>
          </div>
        </div>
        <div className='card-background'>
          <img src={game.img} alt='' />
        </div>
      </div>

      <svg width='0' height='0' x='0px' y='0px'>
        <defs>
          <clipPath id='wave' clipPathUnits='objectBoundingBox'>
            <path
              d='M1.5,0H1H0.5H0v0.8C0.3,0.8,0.3,1,0.5,1c0,0,0,0,0,0C0.8,1,0.8,0.8,1,0.8c0,0,0,0,0,0C1.3,0.8,1.3,1,1.5,1
    C1.8,1,1.8,0.8,2,0.8V0H1.5z'
            />
            <animateTransform
              attributeType='XML'
              attributeName='transform'
              type='translate'
              from='0 0'
              to='-185 0'
              begin='0s'
              dur='10s'
              repeatCount='indefinite'
            />
          </clipPath>
        </defs>
      </svg>
    </GameCardWrapper>
  );
};

export default GameCard;
