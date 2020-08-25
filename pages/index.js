import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import ExpenseTotal from './components/ExpenseTotal';
import Navbar from './components/Navbar';
import ExpensesContainer from './components/ExpensesContainer';

import { COLORS } from '../styles/colors';

const Container = styled.div`
  height: 100vh;
  padding: 52px 25px 0;
  position: relative;
  width: 100vw;
`;

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
        <ExpenseTotal />
        <Navbar />
        <ExpensesContainer />
      </Container>
    </>
  );
}

export default Main;
