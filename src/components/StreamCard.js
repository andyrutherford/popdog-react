import React from 'react';
import styled from 'styled-components';

import user from '../img/user.svg';
import { ReactComponent as TwitchIcon } from '../img/twitch-small.svg';

const StreamCardWrapper = styled.div`
  width: 288px;
  height: 231px;
  border-radius: 10px;
  transition: all 150ms ease-in-out;

  .image {
    position: relative;
    background: transparent;
    font-size: 0.75rem;
    font-weight: 600;
    width: 288px;
    height: 169px;
    background: lightgrey;
    border-radius: 10px;
    border-bottom-right-radius: 20px;
    color: #fff;
  }

  .top-left {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5em;
    width: 9em;
    background: grey;
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
    padding-right: 1em;
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

  .top-right {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5em 0.5em 0 0;
  }

  .top-right div {
    background: grey;
    border-radius: 50vh;
    height: 1.5em;
    width: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-right div span {
    display: none;
    margin-right: 0.5em;
  }

  .center {
    position: absolute;
    top: calc(50% - 2em);
    left: calc(50% - 2em);
    opacity: 0;
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
  }

  :hover {
    transform: scale(1.1);
    -webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
  }

  :hover .image {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    transition: border-radius 150ms ease-in-out;
  }

  :hover .top-right div {
    transition: background 150ms ease-in-out, width 150ms ease-in-out;
    width: 110px;
    background: #9147ff;
  }

  :hover .top-right div span {
    display: inline;
  }

  :hover .center {
    // visibility: visible;
    // transition: visibility 150ms ease-in-out;
    opacity: 1;
    transition: opacity 300ms ease-in-out;
  }

  .description {
    font-size: 0.75rem;
    font-weight: 600;
    background: ${(props) => props.theme.colors.cardBackground};
    padding: 1em 0.5em 0.5em 0.5em;
    border-radius: 10px;
  }

  .description .title {
    font-weight: bold;
    color: ${(props) => props.theme.colors.btnPrimary};
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
          <div className='play-btn'>
            <div></div>
          </div>
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
