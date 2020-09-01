import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';
import { TitleLarge } from '@styles/texts';

const Container = styled.div`
  display: flex;
  margin-bottom: 40px; /* TODO - Abstract this margin to specify it on the parent component to make this reusable */
  width: 100%;
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const TitleLeft = styled(TitleLarge)`
  margin-left: 16px;
`;

function ExpenseCard() {
  return (
    <Container>
      <TitleLarge>History</TitleLarge>
      <TitleLeft>Profile</TitleLeft>
    </Container>
  );
}

export default ExpenseCard;
