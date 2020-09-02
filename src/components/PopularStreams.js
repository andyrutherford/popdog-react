import React from 'react';
import styled from 'styled-components';

import StreamCard from './cards/StreamCard';
import SeeMoreButton from './UI/SeeMoreButton';

import rightarrow from '../img/right-arrow.svg';

const PopularStreamsWrapper = styled.div`
  padding: 4rem 0 2rem;
  h1 {
    font: 600 2rem / 48px Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: -2px;
    margin-bottom: 1rem;
  }
  .header {
    margin-bottom: 1em;
  }

  .header span {
    color: ${(props) => props.theme.colors.textSecondary};
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fill, 288px);
    gap: 2em 1.5em;
    justify-content: center;
  }

  .separator {
    margin-top: 2rem;
    display: flex;
    align-items: center;
  }

  .separator-btn {
    width: 100%;
  }

  .separator-line {
    display: none;
  }

  .separator-line hr {
    width: 100%;
    border: 0.5px solid ${(props) => props.theme.colors.linePrimary};
  }

  .separator-btn a:after {
    width: 18px;
    height: 18px;
    display: inline-block;
    content: '';
    -webkit-mask: url(${rightarrow}) no-repeat 50% 50%;
    mask: url(${rightarrow}) no-repeat 50% 50%;
    -webkit-mask-size: cover;
    mask-size: cover;
    background: ${(props) => props.theme.colors.btnPrimary};
    vertical-align: text-top;
    margin-left: 0.5em;
  }

  .separator-btn a:hover:after {
    background: #fff;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    h1 {
      font-size: 2.5rem;
      margin-bottom: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .separator div {
    }
    .separator-line {
      display: block;
      flex: 1 1 0%;
    }

    .separator-btn {
      width: 200px;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;

const PopularStreams = () => {
  return (
    <PopularStreamsWrapper>
      <div className='header'>
        <h1>Popular Streams</h1>
        <span>The most viewers right now on Twitch</span>
      </div>
      <div className='content'>
        <StreamCard />
        <StreamCard />
        <StreamCard />
        <StreamCard />
        <StreamCard />
        <StreamCard />
      </div>
      <div className='separator'>
        <div className='separator-line'>
          <hr />
        </div>
        <div className='separator-btn'>
          <SeeMoreButton href='#!'>See More Streams</SeeMoreButton>
        </div>
        <div className='separator-line'>
          <hr />
        </div>
      </div>
    </PopularStreamsWrapper>
  );
};

export default PopularStreams;
