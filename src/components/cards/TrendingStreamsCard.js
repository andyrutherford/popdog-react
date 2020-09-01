import React from 'react';
import styled from 'styled-components';

import flame from '../../img/flame.svg';
import mic from '../../img/mic.svg';
import user from '../../img/user.svg';

const TrendingStreamsCardWrapper = styled.div`
  width: 335px;
  height: 184px;
  border: 1px solid black;
  border-radius: 10px;
  margin: auto;
  background-color: lightgrey;

  position: relative;

  .overlay {
    border: 1px dashed black;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 562px;
    height: 294px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 762px;
    height: 406px;
    padding: 1.5em;
    .overlay {
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
            <div className='live'></div>
            <div className='viewers'></div>
            <div className='language'></div>
          </div>
          <div className='stream-info'>
            <h2 className='title'></h2>
            <p className='game'></p>
            <div className='bar'></div>
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
