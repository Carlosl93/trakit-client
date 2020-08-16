import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';

const Container = styled.div`
  background-color: ${COLORS.NEUTRAL_LIGHT};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-between;
  padding: 18px;
  width: 100%;
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

function ExpenseCard() {
  return (
    <Container>
      <Title />
      <AmountContainer>
        <Title width="200px" height="82px" />
        <Title width="60px" height="60px" />
      </AmountContainer>
    </Container>
  );
}

export default ExpenseCard;
