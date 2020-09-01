import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';
import { TitleMedium, HeadingLarge } from '@styles/texts';

const Container = styled.div`
  background-color: ${COLORS.NEUTRAL_LIGHT};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 130px;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 18px;
  width: 100%;
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const AddAmount = styled.div`
  align-items: center;
  border: 4px solid ${COLORS.NEUTRAL_BLACK};
  border-radius: 10px;
  height: 60px;
  display: flex;
  justify-content: center;
  font-size: 52px;
  width: 60px;
`;

function ExpenseTotal() {
  return (
    <Container>
      <TitleMedium>Monthly</TitleMedium>
      <AmountContainer>
        <HeadingLarge>$ 120.000</HeadingLarge>
        <AddAmount>+</AddAmount>
      </AmountContainer>
    </Container>
  );
}

export default ExpenseTotal;
