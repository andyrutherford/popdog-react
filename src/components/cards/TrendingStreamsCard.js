import React from 'react';
import styled from 'styled-components';

import { ReactComponent as MicIcon } from '../../img/mic.svg';
import { ReactComponent as FlameIcon } from '../../img/flame.svg';
import user from '../../img/user.svg';
import streamer from '../../img/streamer-3.jpg';
import { ReactComponent as LeftChevron } from '../../img/left-chevron.svg';
import { ReactComponent as RightChevron } from '../../img/right-chevron.svg';

const TrendingStreamsCardWrapper = styled.div`
  width: 335px;
  height: 184px;
  margin: auto;

  button {
    background: transparent;
    border: none;
    height: 3.5em;
    width: 3.5em;
    border-radius: 50vh;
    cursor: pointer;
  }

  button:hover {
    background: ${(props) => props.theme.colors.hoverSecondary};
  }

  .main-card {
    width: 100%;
    height: 100%;
    border-radius: 16px;

    color: #fff;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url(https://source.unsplash.com/random/762x406/?videogame);
    transition: 150ms ease-in-out;
  }

  .main-card:hover {
    -webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .main-card:hover .center {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    padding: 0.5em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .stream-stats {
    display: flex;
    margin-bottom: 0.5em;
  }

  .stream-stats > div {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50vh;
    height: 1.75em;
    display: flex;
    align-items: center;
    padding: 0 0.125em 0 0;
    margin: 0 0.25em;
    font-size: 0.625rem;
    font-weight: 700;
  }

  .live {
    display: inline-block;
    background: red;
    margin: 0.125em;
    padding: 0 0.5em 0 0.25em;
    border-radius: 50vh;
  }

  .live div {
    display: inline-block;
    height: 0.7em;
    width: 0.7em;
    background: #fff;
    border-radius: 50vh;
    margin-right: 0.25em;
  }

  .viewers {
    display: flex;
    align-items: center;
    padding-right: 0.25em;
  }
  .viewers:before {
    width: 16px;
    height: 16px;
    display: inline-block;
    content: '';
    -webkit-mask: url(${user}) no-repeat 50% 50%;
    mask: url(${user}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background: #fff;
    vertical-align: text-top;
    margin-right: 0.25em;
  }

  .language {
    display: flex;
    align-items: center;
    padding: 0 0.5em;
  }

  .mic {
    margin-right: 0.25em;
    height: 1.25em;
  }

  .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 700;
    font-size: 1em;
  }

  .game {
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0 0 1.5em 0;
  }

  .bar {
    display: flex;
    align-items: center;
  }

  .flame {
    width: 1.5em;
    fill: orange;
    margin-right: 1em;
  }

  .bar div {
    display: flex;
    align-items: center;
    height: 2px;
    width: 70%;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50vh;
  }

  .bar div > div {
    height: 2px;
    width: 75%;
    background: orange;
    box-shadow: rgba(255, 199, 0, 0.75) 0px -3px 12px,
      rgba(255, 245, 0, 0.5) 0px 0px 10px,
      rgba(255, 241, 118, 0.5) 0px 4px 4px inset;
    border-radius: 50vh;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
  }

  .card-footer .user {
    display: flex;
    align-items: center;
  }

  .card-footer .avatar {
    height: 2.5em;
    width: 2.5em;
    border-radius: 50vh;
    background: grey;
    margin-right: 0.75em;
  }

  .card-footer .avatar img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .card-footer .user .username {
    font-weight: 700;
    font-size: 1em;
  }

  .username a {
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .username a:hover {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }

  .card-footer .nav {
    display: none;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 562px;
    height: 294px;

    .main-card {
      width: 100%;
      height: 100%;
    }
    .card-body {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      transition: opacity 200ms ease-out 0s;
      background: rgba(0, 0, 0, 0)
        linear-gradient(270deg, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0.75) 100%)
        repeat scroll 0% 0%;
      opacity: 1;
    }
    .center {
      position: absolute;
      top: calc(50% - 4em);
      left: calc(50% - 2em);
      opacity: 0;
      transition: 250ms ease-in-out;
    }
    .play-btn {
      height: 4em;
      width: 4em;
      background: red;
      border-radius: 50vh;
    }
    .play-btn div {
      width: 100%;
      height: 100%;
      background: #fff;
      clip-path: polygon(35% 25%, 35% 75%, 78% 50%);
    }
    .overlay {
      padding: 1em;
      justify-content: flex-end;
    }
    .stream-stats > div {
      height: 2em;
      padding: 0 0.25em;
      margin: 0 0.5em;
      font-size: 0.75rem;
    }

    .title {
      font-size: 1.625rem;
      line-height: 1.25em;
    }

    .bar div {
      height: 4px;
    }

    .bar div > div {
      height: 4px;
    }

    .card-footer .nav {
      display: flex;
    }

    .card-footer .avatar {
      height: 3em;
      width: 3em;
      border-radius: 50vh;
      background: grey;
      margin-right: 1em;
    }

    .card-footer .nav svg {
      width: 100%;
      height: 100%;
      stroke: ${(props) => props.theme.colors.textThird};
    }

    .card-footer .nav button:first-child {
      margin-right: 1em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 810px;
    height: 454px;
    .main-card {
      width: 100%;
      height: 100%;
      padding-left: 1.5em;
    }

    .center {
      top: calc(50% - 2.5em);
      left: calc(50% - 2.5em);
    }

    .play-btn {
      height: 5em;
      width: 5em;
    }

    .overlay {
      width: 60%;
      padding: 1.5em;
    }

    .title {
      line-height: 1.75em;
      max-height: 3.5em;
    }
  }
`;

const TrendingStreamsCard = () => {
  return (
    <TrendingStreamsCardWrapper>
      <div className='main-card'>
        <div className='card-body'>
          <div className='center'>
            <div className='play-btn'>
              <div></div>
            </div>
          </div>
          <div className='overlay'>
            <div className='stream-stats'>
              <div>
                <div className='live'>
                  <div></div>
                  <span>LIVE</span>
                </div>
                <div className='viewers'>2,471</div>
              </div>
              <div>
                <div className='language'>
                  <MicIcon className='mic' />
                  EN
                </div>
              </div>
            </div>
            <div className='stream-info'>
              <h2 className='title'>
                Coscu Army vs Furious Gaming | Unity League Flow | Gran Final |
                Clausura 2020 | CS:GO
              </h2>
              <p className='game'>Playing Call of Duty: Modern Warfare</p>
              <div className='bar'>
                <FlameIcon className='flame' />
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <div className='user'>
          <div className='avatar'>
            <img src={streamer} alt='streamer' />
          </div>
          <span className='username'>
            <a href='#!'>Autophil</a>
          </span>
        </div>
        <div className='nav'>
          <button className='left'>
            <LeftChevron className='arrow' />
          </button>
          <button className='right'>
            <RightChevron className='arrow' />
          </button>
        </div>
      </div>
    </TrendingStreamsCardWrapper>
  );
};

export default TrendingStreamsCard;
