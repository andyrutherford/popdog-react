import React from 'react';
import styled from 'styled-components';

import { ReactComponent as RightChevronIcon } from '../img/right-chevron.svg';

const PopularWrapper = styled.div`
  margin: 50px 0;
  overflow: scroll;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -1px;
  }

  a {
    padding-right: 1rem;
  }

  a:hover {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }

  a:hover + .arrow,
  .arrow:hover {
    background: ${(props) => props.theme.colors.btnPrimary};
    stroke: #fff;
    cursor: pointer;
  }

  .arrow:hover ~ a {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }

  .content {
    display: inline-grid;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    padding-bottom: 16px;
    grid-template-rows: 300px;
    grid-template-columns: 283px 283px 283px;
    gap: 0px 8px;
  }

  .arrow {
    background: ${(props) => props.theme.colors.btnSecondary};
    stroke: ${(props) => props.theme.colors.btnPrimary};
    border-radius: 50vh;
    width: 30px;
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .card {
    border: 1px solid black;
    border-radius: 1rem;
    height: 206px;
  }

  @media (min-width: 972px) {
    h2 {
      font-size: 2rem;
    }

    .arrow {
      width: 40px;
    }

    .content {
      gap: 0px 24px;
      grid-template-rows: 334px;
      grid-template-columns: 392px 392px 392px;
    }

    .card {
      height: 278px;
      max-height: 278px;
      overflow: hidden;
    }
  }
`;

const Popular = () => {
  return (
    <PopularWrapper>
      <div className='content'>
        <div className='popular-streams-card'>
          <h2 className='card-header'>
            <a href='#!'>Popular Streams</a>
            <RightChevronIcon className='arrow' />
          </h2>
          <div className='card'></div>
        </div>
        <div className='esports-matches-card'>
          <h2 className='card-header'>
            <a href='#!'>Esports matches</a>
            <RightChevronIcon className='arrow' />
          </h2>
          <div className='card'></div>
        </div>
        <div className='trending-streams-card'>
          <h2 className='card-header'>Trending streams</h2>
          <div className='card'></div>
        </div>
      </div>
    </PopularWrapper>
  );
};

export default Popular;
