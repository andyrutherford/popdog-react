import React from 'react';
import styled from 'styled-components';

const PopularStreamsWrapper = styled.div`
  padding: 4rem 0 2rem;
  h1 {
    font: 600 2rem / 48px Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: -2px;
    margin-bottom: 1rem;
  }
  select {
    height: 40px;
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
  }
  .header {
    margin-bottom: 1.5em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const PopularStreams = () => {
  return (
    <PopularStreamsWrapper>
      {' '}
      <div className='header'>
        <h1>Top Games</h1>
        <span>The most viewers right now on Twitch</span>
      </div>
    </PopularStreamsWrapper>
  );
};

export default PopularStreams;
