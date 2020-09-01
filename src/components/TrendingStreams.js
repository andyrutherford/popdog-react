import React from 'react';
import styled from 'styled-components';

import Container from '../components/UI/Container';
import TrendingStreamsCard from '../components/cards/TrendingStreamsCard';

const TrendingStreamsWrapper = styled.div`
  padding: 4rem 0 2rem;
  h1 {
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

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    h1 {
      font-size: 2.5rem;
      margin-botton: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
`;

const TrendingStreams = () => {
  return (
    <TrendingStreamsWrapper>
      <Container>
        <div className='header'>
          <h1>Trending Streams</h1>
          <span>Find new favorites from these overachievers</span>
        </div>
        <TrendingStreamsCard />
      </Container>
    </TrendingStreamsWrapper>
  );
};

export default TrendingStreams;