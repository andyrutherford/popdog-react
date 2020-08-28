import styled, { css } from 'styled-components';

const SeeMoreButton = styled.a`
  display: inline-block;
  background: ${(props) => props.theme.colors.btnSecondary};
  color: ${(props) => props.theme.colors.btnPrimary};
  font-weight: 500;
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
  border-radius: 50vh;
  padding: 11px 24px;

  :hover {
    background: ${(props) => props.theme.colors.btnPrimary};
    color: #fff;
    box-shadow: rgba(32, 98, 225, 0.25) 0px 4px 4px;
  }
`;

export default SeeMoreButton;

//   ${(props) =>
//     props.secondary &&
//     css`
//       color: black;
//       background-color: transparent;
//       border: 1px solid #d3d3d3;
//     `}
//   ${(props) =>
//     props.link &&
//     css`
//       color: black;
//       background-color: transparent;
//       border: none;
//       margin: 0;
//       padding: 0;
//     `}
//   ${(props) =>
//     props.tab &&
//     css`
//       background-color: transparent;
//       padding: 0;
//       margin: 0;
//       border: none;
//       color: black;
//     `}
