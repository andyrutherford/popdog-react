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
    display: flex;
    align-items: center;
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
`;

const ToggleScoresWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 75px;
  height: 34px;
  margin-left: 1em;
  transform: scale(0.8);

  :hover .slider {
    background-color: #5b5d5e;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.checkboxPrimary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #29cf4e;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(41px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const EsportsMatches = () => {
  return (
    <EsportsMatchesWrapper>
      <div className='header'>
        <h1>Esports matches</h1>
        <span>
          <label>Hide Scores</label>
          <ToggleScoresWrapper className='switch'>
            <input type='checkbox' />
            <span class='slider round'></span>
          </ToggleScoresWrapper>
        </span>
      </div>
      <div className='content'>
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
