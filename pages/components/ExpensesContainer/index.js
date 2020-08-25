import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';

import ExpensesDay from '../ExpensesDay';

const Container = styled.div`
  height: 52vh;
  overflow-y: scroll;
  margin-bottom: 10px;
  width: 100%;
`;

function ExpenseContainer() {
  return (
    <Container>
      <ExpensesDay />
      <ExpensesDay />
      <ExpensesDay />
    </Container>
  );
}

export default ExpenseContainer;
