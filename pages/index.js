import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import ExpenseCard from './components/ExpenseCard';
import Navbar from './components/Navbar';

import { COLORS } from '../styles/colors';

const Container = styled.div`
  height: 100vh;
  padding: 52px 25px 0;
  position: relative;
  width: 100vw;
  /* 
  &::before {
    background-color: red;
    content: '';
    clip-path: circle(50% at 50% 0);
    height: 120vw;
    position: absolute;
    top: 0;
    left: calc(-15%);
    width: calc(100vw + 30%);
    z-index: 0;
  } */
`;

// const Circle = styled.div`
//   background-color: ${COLORS.WHITE_FOG};
//   border-radius: 50%;
//   content: '';
//   height: 100vw;
//   position: fixed;
//   top: calc(-100vw / 2 + 40px);
//   left: calc(-15%);
//   width: calc(100vw + 30%);
//   margin-left: 1px;
// `;

const Circle = styled.div`
  background-color: ${COLORS.WHITE_FOG};
  clip-path: circle(70% at 50% 0);
  position: absolute;
  width: 100vw;
  height: 100vw;
  top: 0;
  left: 0;
  opacity: 0.99;
`;

function Main() {
  return (
    <>
      <Circle />
      <Container>
        <Header />
        <ExpenseCard />
        <Navbar />
      </Container>
    </>
  );
}

export default Main;
