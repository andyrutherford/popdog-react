import React from 'react';
import styled from 'styled-components';

import { ReactComponent as MicIcon } from '../../img/mic.svg';
import { ReactComponent as FlameIcon } from '../../img/flame.svg';
import user from '../../img/user.svg';

const TrendingStreamsCardWrapper = styled.div`
  width: 335px;
  height: 184px;
  border-radius: 10px;
  margin: auto;
  background-color: lightgrey;
  color: #fff;

  position: relative;

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    padding: .5em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .stream-stats {
    display: flex;
    margin-bottom: .5em;

  }

  .stream-stats > div {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50vh;
    height: 1.75em;
    display: flex;
    align-items: center;
    padding 0 .125em 0 0;
    margin: 0 .25em;
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
    padding-right: .25em;
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

  .mic{
    margin-right: .25em;
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
    font-size: .75rem;
    font-weight: 400;
    margin: 0 0 1.5em 0;
  }

  .bar {
    display: flex;
    align-items: center;
  }

  .flame {
    width: 1.5em;
    fill:orange;
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

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 562px;
    height: 294px;

    .overlay {
      padding:1em;
      justify-content: flex-end;
    }

    .stream-stats > div {
      height: 2em;
      padding 0 .25em;
      margin: 0 .5em;
      font-size: 0.75rem;
    }

    .title {
      font-size: 1.625rem;
      line-height: 1.25em;
    }

    .bar div {
      height: 4px;
    }

    .bar div > div{
      height: 4px;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 810px;
    height: 454px;
    padding-left: 1.5em;

    .overlay {
      width: 60%;
      padding:1.5em;
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

        {/* <img
          className='stream-image'
          src='https://source.unsplash.com/random/762x406/?videogame'
        /> */}
      </div>
    </TrendingStreamsCardWrapper>
  );
};

export default TrendingStreamsCard;
