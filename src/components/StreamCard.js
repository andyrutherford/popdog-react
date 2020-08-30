import React from 'react';
import styled from 'styled-components';

import user from '../img/user.svg';
import twitch from '../img/twitch.svg';

const StreamCardWrapper = styled.div`
  width: 288px;
  height: 231px;
  border: transparent;
  border-radius: 10px;
  background: lightgrey;
  transition: all 150ms ease-in-out;

  .image {
    position: relative;
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
    font-weight: 600;
    font-size: 0.75rem;
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
    color: #fff;
  }

  .live div {
    height: 0.7em;
    width: 0.7em;
    background: white;
    border-radius: 50vh;
  }

  .viewers {
    width: 60%;
    color: #fff;
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
    font-size: 0.75rem;
  }

  .top-right div {
    background: grey;
    border-radius: 50vh;
    height: 1.5em;
    width: 1.5em;
  }

  // .top-right div:before {
  //   width: 16px;
  //   height: 16px;
  //   display: inline-block;
  //   content: '';
  //   -webkit-mask: url(${twitch}) no-repeat 50% 50%;
  //   mask: url(${twitch}) no-repeat 50% 50%;
  //   -webkit-mask-size: cover;
  //   mask-size: cover;
  //   background: #fff;
  //   vertical-align: text-top;
  //   margin-right: 0.25em;
  // }

  :hover {
    transform: scale(1.1);
  }

  .description {
    // position: absolute;
    // bottom: 0;
    // left: 0;
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
          <div></div>
        </div>
        <div className='bottom-left'></div>
        <div className='bottom-right'></div>
      </div>
      {/* <div className='description'>
        <span>SpyParty</span>
        <p>
          @XQC ON TWITTER HEY MAN NICE TITLE BRO! IM OUT OF IDEAS! ARE YOU?
          YES...
        </p>
      </div> */}
    </StreamCardWrapper>
  );
};

export default StreamCard;
