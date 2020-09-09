import React from 'react';
import styled from 'styled-components';

import PopularStreamsCard from '../components/cards/PopularStreamsCard';
import PopularTrendingStreamsCard from '../components/cards/PopularTrendingStreamsCard';
import PopularEsportsMatchesCard from '../components/cards/PopularEsportsMatchesCard';

import { ReactComponent as RightChevronIcon } from '../img/right-chevron.svg';

const PopularWrapper = styled.div`
  padding-bottom: 2rem;

  h2 {
    color: ${(props) => props.theme.colors.textPrimary};
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
    border-color: ${(props) => props.theme.colors.linePrimary};
  }

  a {
    padding-right: 1em;
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
    height: 1.25em;
    width: 1.25em;
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    padding-top: 0.5em;
  }

  .card-header a {
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .card-header a:hover {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }

  .card {
    border: 1px solid black;
    border-radius: 1rem;
    height: 206px;
    background: url(https://source.unsplash.com/random/400x300/?videogame);
    background-size: 100% 100%;
  }

  .separator {
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 0.625em;
  }

  .separator label {
    font-size: 0.75rem;
    font-weight: 300;
    position: absolute;
    top: 0%;
    left: 0;
    margin-left: 0.75em;
    background-color: ${(props) => props.theme.colors.mainBackground};
    color: ${(props) => props.theme.colors.lineSecondary};
    padding: 0 0.25em;
  }

  .separator select {
    color: ${(props) => props.theme.colors.lineSecondary};
    font-size: 1rem;
    padding-left: 0.5em;
    margin-right: 1em;
  }

  .separator div {
    padding-left: 1eem;
    flex: 1 1 0%;
  }

  .separator div hr {
    width: 100%;
    border: 0.5px solid ${(props) => props.theme.colors.linePrimary};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    h2 {
      font-size: 2rem;
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

    .separator {
      margin-top: 2em;
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
              <PopularStreamsCard />
            </div>
            <div className='esports-matches-card'>
              <h2 className='card-header'>
                <a href='#!'>Esports matches</a>
                <RightChevronIcon className='arrow' />
              </h2>
              <PopularEsportsMatchesCard />
            </div>
            <div className='trending-streams-card'>
              <h2 className='card-header'>Trending streams</h2>
              <PopularTrendingStreamsCard />
            </div>
          </div>
        </div>
        <div className='separator'>
          <label htmlFor='select-language'>Channel language</label>
          <select id='select-language'>
            <option value='All languages'>All Languages</option>
            <option value='English'>English</option>
            <option value='Spanish'>Spanish</option>
            <option value='Portuguese'>Portuguese</option>
            <option value='Russian'>Russian</option>
            <option value='Japanese'>Japanese</option>
            <option value='Vietnamese'>Vietnamese</option>
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
