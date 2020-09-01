import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';
import { TitleSmall, TitleMedium } from '@styles/texts';

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const Icon = styled(Title)`
  flex-grow: 0;
  margin-right: 15px;
`;

const ExpenseDescription = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ExpenseTitle = styled(Title)`
  margin-bottom: 10px;
`;

const TitleExpense = styled(TitleSmall)`
  color: ${COLORS.PURPLE};
`;

function ExpenseCard() {
  return (
    <Container>
      <Icon height="50px" width="50px" />
      <ExpenseDescription>
        <TitleMedium>Food</TitleMedium>
        <TitleSmall>Buy weekly groceries</TitleSmall>
      </ExpenseDescription>
      <TitleExpense>+ $20.000</TitleExpense>
    </Container>
  );
}

export default ExpenseCard;
