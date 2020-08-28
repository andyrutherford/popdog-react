import React from 'react';
import styled from 'styled-components';

import { ReactComponent as RightChevronIcon } from '../img/right-chevron.svg';

const PopularWrapper = styled.div`
  padding-bottom: 2rem;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -1px;
  }

  select {
    height: 40px;
    width: 200px;
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

  .container {
    overflow: scroll hidden;
    scrollbar-width: none;
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

  .separator {
    padding-top: 2rem;
    display: flex;
    align-items: center;
  }

  .separator div {
    padding-left: 1rem;
    flex: 1 1 0%;
  }

  .separator div hr {
    width: 100%;
    border: 0.5px solid rgb(227, 232, 235);
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
    <div>
      <PopularWrapper>
        <div className='container'>
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
        </div>
        <div className='separator'>
          <select>
            <option value='A'>All Languages</option>
            <option value='B'>English</option>
          </select>
          <div>
            <hr />
          </div>
        </div>
      </PopularWrapper>
    </div>
  );
};

export default Popular;
