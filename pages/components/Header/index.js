import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@styles/colors';
import { Title } from '@styles/Styles';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

function Header() {
  return (
    <Container>
      <Title />
      <Title width="80px" />
    </Container>
  );
}

export default Header;
