import React from 'react';
import styled from 'styled-components';

import Container from '../components/UI/Container';
import TrendingStreamsCard from '../components/cards/TrendingStreamsCard';

const TrendingStreamsWrapper = styled.div`
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
`;

const TrendingStreams = () => {
  return (
    <TrendingStreamsWrapper>
      <Container>
        <div className='header'>
          <h1>Popular Streams</h1>
          <span>The most viewers right now on Twitch</span>
        </div>
        <TrendingStreamsCard />
      </Container>
    </TrendingStreamsWrapper>
  );
};

export default TrendingStreams;
