import React from 'react';
import styled from 'styled-components';

import EsportsMatchesCard from './cards/EsportsMatchesCard';
import SeeMoreButton from './UI/SeeMoreButton';
import rightarrow from '../img/right-arrow.svg';

const EsportsMatchesWrapper = styled.div`
  padding: 4rem 0 2rem;
  h1 {
    color: ${(props) => props.theme.colors.textPrimary};
    font: 600 2rem / 48px Poppins, Helvetica, Arial, sans-serif;
    letter-spacing: -2px;
  }
  .header {
    margin-bottom: 1em;
    text-align: center;
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
  }
`;

const EsportsMatches = () => {
  return (
    <EsportsMatchesWrapper>
      <div className='header'>
        <h1>Esports matches</h1>
        <span>
          <input type='checkbox' id='toggle-scores' name='scores' value='' />
          <label htmlFor='toggle-scores'>Hide Scores</label>
        </span>
      </div>
      <div className='content'>
        <EsportsMatchesCard />
        <EsportsMatchesCard />
        <EsportsMatchesCard />
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
    </EsportsMatchesWrapper>
  );
};

export default EsportsMatches;
