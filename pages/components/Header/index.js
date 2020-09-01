import React from 'react';
import styled from 'styled-components';

import { Title } from '@styles/Styles';
import { TitleMedium } from '@styles/texts';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

function Header() {
  return (
    <Container>
      <TitleMedium>Daily Balance</TitleMedium>
      <TitleMedium>$ 50.000</TitleMedium>
    </Container>
  );
}

export default Header;
