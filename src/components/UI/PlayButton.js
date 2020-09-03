import React from 'react';
import styled from 'styled-components';

import play from '../../img/play.svg';

const PlayButtonWrapper = styled.div`
  .play-btn {
    height: 4em;
    width: 4em;
    background: red;
    border-radius: 50vh;
  }

  .play-btn div {
  }

  .play-btn .icon::before,
  .play-btn .icon::after {
    opacity: 1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50vh;
  }

  .play-btn .icon::before {
    width: 100%;
    height: 100%;
    /* background: #fff; */
    /* clip-path: polygon(35% 25%, 35% 75%, 78% 50%); */
    background-image: url(${play});
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: center;
    display: grid;
    place-items: center;
    font-size: 5em;
    z-index: 10;
    transition: opacity 50ms linear, background-color 100ms linear;
  }

  .play-btn .icon:hover::before {
    background-color: #cc0202;
  }

  .play-btn .icon:hover::after {
    background: red;
    z-index: 1;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.9);
      opacity: 0.75;
    }
    100% {
      transform: scale(1.3);
      opacity: 0%;
    }
  }
`;

const PlayButton = () => (
  <PlayButtonWrapper>
    <div className='play-btn'>
      <div className='icon'></div>
    </div>
  </PlayButtonWrapper>
);

export default PlayButton;
