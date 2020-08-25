import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';

import ExpenseCard from '../ExpenseCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const TitleDate = styled(Title)`
  margin-bottom: 18px;
`;

function ExpensesDay() {
  return (
    <Container>
      <TitleDate height="8px" width="115px" />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
    </Container>
  );
}

export default ExpensesDay;
