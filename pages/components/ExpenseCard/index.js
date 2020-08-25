import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';

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

const ExpenseSubtitle = styled(Title)`
  flex-grow: 1;
  margin-bottom: 10px;
`;

function ExpenseCard() {
  return (
    <Container>
      <Icon height="50px" width="50px" />
      <ExpenseDescription>
        <ExpenseTitle height="16px" width="180px" />
        <ExpenseSubtitle height="8px" width="115px" />
      </ExpenseDescription>
      <Title height="30px" width="30px" />
    </Container>
  );
}

export default ExpenseCard;
