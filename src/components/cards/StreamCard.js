import React from 'react';
import styled from 'styled-components';

import PlayButton from '../UI/PlayButton';

import user from '../../img/user.svg';
import { ReactComponent as TwitchIcon } from '../../img/twitch-small.svg';
import streamer1 from '../../img/streamer-1.jpg';

const StreamCardWrapper = styled.div`
  width: 288px;
  height: 231px;
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

  .image {
    position: relative;
    background: transparent;
    font-size: 0.75rem;
    font-weight: 600;
    width: 288px;
    height: 169px;
    background: limegreen;
    border-radius: 10px;
    border-bottom-right-radius: 24px;
    color: #fff;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 20%,
        rgba(0, 0, 0, 0.9)
      ),
      url(https://source.unsplash.com/random/300x200/?videogame);
    transition: border-bottom-right-radius 150ms ease-in-out,
      border-radius 150ms ease-in-out;
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
    background: red;
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
    background-image: url(${streamer1});
    background-size: cover;
    border: 1px solid #fff;
  }

  .description {
    font-size: 0.75rem;
    font-weight: 600;
    background: ${(props) => props.theme.colors.cardBackground};
    padding: 1em 0.5em 0.5em 0.5em;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .description .title {
    font-weight: bold;
    color: ${(props) => props.theme.colors.btnPrimary};
  }
  .description p {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const StreamCard = () => {
  return (
    <StreamCardWrapper>
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
          <p className='streamer'>LCK_Korea</p>
        </div>
        <div className='bottom-right'>
          <div></div>
        </div>
      </div>
      <div className='description'>
        <span className='title'>SpyParty</span>
        <p>
          @XQC ON TWITTER HEY MAN NICE TITLE BRO! IM OUT OF IDEAS! ARE YOU?
          YES...
        </p>
      </div>
    </StreamCardWrapper>
  );
};

export default StreamCard;
