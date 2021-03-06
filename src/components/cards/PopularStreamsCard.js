import React from 'react';
import styled from 'styled-components';

import random from '../../utils/random';

import PlayButton from '../UI/PlayButton';

import game from '../../img/cards/headercard2.jpg';
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
    transform: translateY(10%);
  }

  .card-body {
    border-radius: 1rem;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 20%,
        rgba(0, 0, 0, 0.9)
      ),
      url(${game});
    background-size: cover;
    background-position: center;
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
    transition: opacity ease-in-out 150ms, transform ease-in-out 150ms;
  }

  .center:hover {
    transform: scale(1.2) translateY(10%);
    transition: transform 150ms ease-in-out;
  }

  .overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    transition: transform 150ms ease-in-out;
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
    background-image: url(${avatar});
    background-size: 100% 100%;
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
    transition: opacity 150ms ease-in-out;
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
          <PlayButton />
        </div>
        <div className='overlay'>
          <div className='overlay-header'>
            <div className='avatar'></div>
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
              — Most viewers now: <span>{random()} viewers</span>
            </p>
          </div>
        </div>
      </div>
    </PopularStreamsCardWrapper>
  );
};

export default PopularStreamsCard;
