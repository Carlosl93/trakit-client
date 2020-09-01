import styled from 'styled-components';

import { COLORS } from '@styles/colors';

export const Title = styled.p`
  color: ${COLORS.NEUTRAL_BLACK};
  font-weight: 700;
`;

export const TitleLarge = styled(Title)`
  font-size: 24px;
`;

export const TitleMedium = styled(Title)`
  font-size: 18px;
`;

export const TitleSmall = styled(Title)`
  font-size: 14px;
`;

export const HeadingLarge = styled(Title)`
  font-size: 42px;
`;
