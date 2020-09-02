import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  max-width: 1260px;
  background: ${(props) => props.theme.colors.mainBackground};

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 908px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 1260px;
  }
`;

export default Container;
