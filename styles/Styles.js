import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

export const Styles = createGlobalStyle`
  html,
  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

export const Title = styled.p`
  background-color: ${COLORS.NEUTRAL_BLACK};
  border-radius: 10px;
  height: ${props => props.height || '20px'};
  width: ${props => props.width || '150px'};
`;
