import React from 'react';
import styled, { css } from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const TitleLeft = styled(Title)`
  margin-left: 16px;
`;

function ExpenseCard() {
  return (
    <Container>
      <Title height="40px" width="120px" />
      <TitleLeft
        height="40px"
        width="120px"
        css={`
          margin-left: 15px;
        `}
      />
    </Container>
  );
}

export default ExpenseCard;
