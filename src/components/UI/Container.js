import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  max-width: 1260px;

  @media (min-width: 972px) {
    max-width: 908px;
  }

  @media (min-width: 1288px) {
    max-width: 1260px;
  }
`;

export default Container;
