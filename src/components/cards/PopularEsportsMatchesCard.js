import React from 'react';
import styled from 'styled-components';

import PlayButton from '../UI/PlayButton';

import streamer1 from '../../img/streamer-1.jpg';
import streamer2 from '../../img/streamer-2.jpg';
import swords from '../../img/swords.svg';
import avatar from '../../img/avatar-2.png';

const PopularEsportsMatchesCardWrapper = styled.div`
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
        rgba(0, 0, 0, 1)
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
    transition: all ease-in-out 150ms;
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
    padding-right: 1em;
    height: 2.5em;
    border-top: 0.5px solid lightgrey;
    transition: 150ms ease-in-out;
    justify-content: space-between;
  }

  .overlay-footer p {
    font-size: 0.75rem;
    margin: 0 0.75em;
  }

  .overlay-footer p span {
    font-weight: 600;
  }

  .overlay-footer .left,
  .overlay-footer .right {
    display: flex;
    align-items: center;
  }

  .overlay-footer .left .team,
  .overlay-footer .right .team {
    height: 2em;
    width: 2em;
    border-radius: 50vh;
  }

  .overlay-footer .left p,
  .overlay-footer .right p {
    display: none;
  }

  .overlay-footer .left .team {
    background-image: url(${streamer1});
    background-size: 100% 100%;
  }

  .overlay-footer .right .team {
    background-image: url(${streamer2});
    background-size: 100% 100%;
  }

  .overlay-footer .middle {
    display: flex;
    align-items: center;
  }

  .overlay-footer .middle p {
    font-weight: 600;
    font-size: 1.5rem;
  }

  .overlay-footer .middle div {
    background-color: #999;
    -webkit-mask-image: url(${swords});
    mask-image: url(${swords});
    background-size: 100% 100%;
    height: 1.25em;
    width: 1.25em;
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
    .overlay-footer .left .team,
    .overlay-footer .right .team {
      height: 2.5em;
      width: 2.5em;
    }

    .overlay-footer .left p,
    .overlay-footer .right p {
      display: block;
    }

    .overlay-footer .middle p {
      font-size: 1.5rem;
    }

    .overlay-footer .middle div {
      height: 1.25em;
      width: 1.25em;
    }
  }
`;

const PopularEsportsMatchesCard = () => {
  return (
    <PopularEsportsMatchesCardWrapper>
      <div className='card-body'>
        <div className='center'>
          <PlayButton />
        </div>
        <div className='overlay'>
          <div className='overlay-header'>
            <div className='avatar'>
              <img src={avatar} alt='avatar' />
            </div>
            <div className='description'>
              <p>ESL_DOTA2</p>
              <p>Dota 2</p>
            </div>
          </div>
          <div className='overlay-footer'>
            <div className='left'>
              <div className='team'></div>
              <p className='team-name'>FNC</p>
            </div>
            <div className='middle'>
              <p>1</p>
              <div></div>
              <p>1</p>
            </div>
            <div className='right'>
              <p className='team-name'>BOOM</p>
              <div className='team'></div>
            </div>
          </div>
        </div>
      </div>
    </PopularEsportsMatchesCardWrapper>
  );
};

export default PopularEsportsMatchesCard;
