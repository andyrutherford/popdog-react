import React from 'react';
import styled from 'styled-components';

import PlayButton from '../UI/PlayButton';

import user from '../../img/user.svg';
import { ReactComponent as TwitchIcon } from '../../img/twitch-small.svg';
import streamer1 from '../../img/streamer-1.jpg';
import avatar from '../../img/avatar-3.png';
import streamer2 from '../../img/streamer-2.jpg';
import swords from '../../img/swords.svg';

const EsportsMatchesCardWrapper = styled.div`
  width: 288px;
  border-radius: 10px;
  transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;

  :hover {
    transform: scale(1.1);
    -webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
  }

  :hover .description {
    background: ${(props) => props.theme.colors.hoverSecondary};
  }

  :hover .image {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    opacity: 1;
  }

  :hover .top-right div {
    transition: background-color 150ms ease-in-out;
    width: 110px;
    background-color: #9147ff;
  }

  :hover .top-right div span {
    display: inline;
  }

  :hover .center {
    opacity: 1;
    transition: opacity 150ms ease-in-out;
  }

  :hover .overlay-footer .top {
    background: ${(props) => props.theme.colors.hoverThird};
    color: ${(props) => props.theme.colors.textPrimary};
  }

  :hover .overlay-footer .top .left .team {
    transform: translateX(15%) scale(1.2);
  }

  :hover .overlay-footer .top .right .team {
    transform: translateX(-15%) scale(1.2);
  }

  :hover .overlay-footer .bottom {
    transform: translateX(5%);
  }

  .image {
    position: relative;
    background: transparent;
    font-size: 0.75rem;
    font-weight: 600;
    width: 288px;
    height: 169px;
    background: limegreen;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    color: #fff;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 20%,
        rgba(0, 0, 0, 0.9)
      ),
      url(https://source.unsplash.com/random/300x200/?videogame);
  }

  .top-left {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 9em;
    background: rgba(0, 0, 0, 0.5);
    margin: 0.5em 0 0 0.5em;
    border-radius: 50vh;
  }

  .live {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    background: ${(props) => props.theme.colors.clrred};
    margin: 0.125em;
    padding: 0 0.25em;
    border-radius: 50vh;
  }

  .live div {
    height: 0.7em;
    width: 0.7em;
    background: white;
    border-radius: 50vh;
  }

  .viewers {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1em;
  }

  .viewers:before {
    width: 1.125em;
    height: 1.125em;
    content: '';
    -webkit-mask: url(${user}) no-repeat 50% 50%;
    mask: url(${user}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background: #fff;
    margin-right: 0.25em;
  }

  .top-right {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5em 0.5em 0 0;
    overflow: hidden;
  }

  .top-right div {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50vh;
    height: 1.5em;
    width: 1.5em;
    display: flex;
    justify-content: flex-end;
    transition: background-color 150ms ease-in-out;
    padding-right: 0.25em;
  }

  .top-right div span {
    display: none;
    margin-right: 0.5em;
  }

  .center {
    position: absolute;
    top: calc(50% - 3em);
    left: calc(50% - 2em);
    opacity: 0;
    transition: opacity ease-in-out 150ms;
  }

  .center:hover {
    transform: scale(1.2);
    transition: transform 150ms ease-in-out;
  }

  .bottom-left {
    font-size: 1rem;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 0 0.75em 0.75em;
  }

  .bottom-right {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .bottom-right div {
    margin: 0 0.5em 0.5em 0;
    height: 3em;
    width: 3em;
    border-radius: 50vh;
    background: grey;
    background-image: url(${avatar});
    background-size: cover;
    border: 1px solid #fff;
  }

  .overlay-footer {
    transition: opacity 150ms ease-in-out;
    color: #fff;
    height: 112px;
    border-radius: inherit;
  }

  .overlay-footer .top {
    background: ${(props) => props.theme.colors.cardBackgroundSecondary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0 0.5em;
    height: 50%;
    transition: background 250ms ease-in-out;
  }

  .overlay-footer .top .left,
  .overlay-footer .top .right {
    display: flex;
    align-items: center;
  }

  .overlay-footer .top .left .team,
  .overlay-footer .top .right .team {
    height: 2em;
    width: 2em;
    border-radius: 50vh;
    transition: transform 150ms ease-in-out;
  }

  .overlay-footer .top .left p,
  .overlay-footer .top .right p {
    font-size: 0.75rem;
    font-weight: 300;
    margin: 0 1em;
  }

  .overlay-footer .top .left .team {
    background-image: url(${streamer1});
    background-size: 100% 100%;
  }

  .overlay-footer .top .right .team {
    background-image: url(${streamer2});
    background-size: 100% 100%;
  }

  .overlay-footer .top .middle {
    display: flex;
    align-items: center;
  }

  .overlay-footer .top .middle p {
    font-weight: 600;
    font-size: 1.25rem;
  }

  .overlay-footer .top .middle div {
    background-color: #999;
    -webkit-mask-image: url(${swords});
    mask-image: url(${swords});
    background-size: 100% 100%;
    height: 1em;
    width: 1em;
    margin: 0 1em;
  }

  .overlay-footer .bottom {
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #000;
    height: 50%;
    width: 50%;
    border-radius: inherit;
    transition: transform 150ms ease-in-out;
  }

  .overlay-footer .bottom .game-name {
    color: ${(props) => props.theme.colors.btnPrimary};
    font-size: 0.75rem;
    font-weight: 600;
  }
  .overlay-footer .bottom .game-type {
    color: ${(props) => props.theme.colors.textPrimary};
    font-size: 1rem;
    font-weight: 600;
  }
`;

const EsportsMatchesCard = ({ showScores }) => {
  return (
    <EsportsMatchesCardWrapper>
      <div className='image'>
        <div className='top-left'>
          <div className='live'>
            <div></div>
            <span>LIVE</span>
          </div>
          <div className='viewers'>34.4k</div>
        </div>
        <div className='top-right'>
          <div>
            <span>Streaming On</span>
            <TwitchIcon width={'1em'} />
          </div>
        </div>
        <div className='center'>
          <PlayButton />
        </div>
        <div className='bottom-left'>
          <p className='streamer'>BTS Pro Series Americas 3</p>
        </div>
        <div className='bottom-right'>
          <div></div>
        </div>
      </div>
      <div className='overlay-footer'>
        <div className='top'>
          <div className='left'>
            <div className='team'></div>
            <p className='team-name'>FNC</p>
          </div>
          <div className='middle'>
            <p>{showScores && '1'}</p>
            <div></div>
            <p>{showScores && '1'}</p>
          </div>
          <div className='right'>
            <p className='team-name'>BOOM</p>
            <div className='team'></div>
          </div>
        </div>
        <div className='bottom'>
          <p className='game-name'>Dota 2</p>
          <p className='game-type'>Round Robin</p>
        </div>
      </div>
    </EsportsMatchesCardWrapper>
  );
};

export default EsportsMatchesCard;
