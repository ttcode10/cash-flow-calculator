import React from 'react';
import styled from 'styled-components';

import { Background, Card, Heading } from '../shared/components';
import { colors, spacing } from '../shared/themes';

const Slogan = styled.div`
  margin-bottom: ${spacing.spacing8x};
  text-align: left;
`;

export const Homepage = () => (
  <Background>
    <Slogan>
      <Heading styleLevel={2} color={colors.white}>
        A good property can sustain itself.
      </Heading>
    </Slogan>
    <Card />
  </Background>
);
