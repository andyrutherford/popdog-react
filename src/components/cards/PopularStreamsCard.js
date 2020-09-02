import React from 'react';
import styled from 'styled-components';

import trophy from '../../img/trophy.svg';
import avatar from '../../img/avatar.png';

const PopularStreamsCardWrapper = styled.div`
  cursor: pointer;
  :hover .overlay {
    transition: transform 150ms ease;
    transform: translateY(2.5em);
  }
  :hover .overlay .overlay-footer {
    opacity: 0;
  }

  :hover .center {
    opacity: 1;
    transition: opacity 250ms ease;
  }

  .card-body {
    border-radius: 1rem;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 20%,
        rgba(0, 0, 0, 0.9)
      ),
      url(https://source.unsplash.com/random/400x300/?videogame);
    background-size: 100% 100%;
    color: #fff;
    height: 206px;
    width: 283px;
    position: relative;
    font-weight: 300;
    overflow: hidden;
  }

  .center {
    position: absolute;
    top: calc(50% - 3em);
    left: calc(50% - 2em);
    opacity: 0;
  }

  .center:hover {
    transform: scale(1.2);
    transition: transform 150ms ease-in-out;
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
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    transition: 150ms ease-in-out;
  }

  .overlay-header {
    display: flex;
    padding: 0 1em;
    height: 4em;
  }

  .overlay-header .avatar {
    height: 3em;
    width: 3em;
    border-radius: 50vh;
    border: 1px solid black;
    margin: 0 1em;
    overflow: hidden;
  }

  .avatar img {
    width: 100%;
  }

  .overlay-header .description {
    color: ${(props) => props.theme.colors.textSecondary};
  }

  .overlay-header .description > p:first-of-type {
    font-weight: bold;
    color: #fff;
  }

  .overlay-footer {
    display: flex;
    align-items: center;
    padding-left: 1em;
    height: 2.5em;
    border-top: 0.5px solid lightgrey;
    transition: 150ms ease-in-out;
  }

  .overlay-footer .icon {
    height: 1.25em;
    width: 1.25em;
    background: #fff;
    border-radius: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay-footer .icon div {
    background-image: url(${trophy});
    background-size: 100% 100%;
    height: 75%;
    width: 75%;
  }

  .overlay-footer p {
    font-size: 0.75rem;
  }

  .overlay-footer p span {
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    :hover .overlay {
      transform: translateY(3.5em);
    }
    .card-body {
      height: 278px;
      width: 392px;
    }
    .overlay-footer {
      height: 3.5em;
    }
    .overlay-footer .icon {
      margin-left: 1em;
      margin-right: 0.25em;
    }
  }
`;

const PopularStreamsCard = () => {
  return (
    <PopularStreamsCardWrapper>
      <div className='card-body'>
        <div className='center'>
          <div className='play-btn'>
            <div></div>
          </div>
        </div>
        <div className='overlay'>
          <div className='overlay-header'>
            <div className='avatar'>
              <img src={avatar} alt='avatar' />
            </div>
            <div className='description'>
              <p>WePlayEsport_EN</p>
              <p>Dota 2</p>
            </div>
          </div>
          <div className='overlay-footer'>
            <div className='icon'>
              <div></div>
            </div>
            &nbsp;
            <p>
              — Most viewers now: <span>63.2k viewers</span>
            </p>
          </div>
        </div>
      </div>
    </PopularStreamsCardWrapper>
  );
};

export default PopularStreamsCard;
