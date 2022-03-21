import React from 'react';
import styled from 'styled-components';

import { Background, Button, Card, FormControl, Heading, Input } from '../shared/components';
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
    <Card>
      <FormControl label="Selling Price">
        <Input startEnhancer="$" onChange={() => console.log('sdfsdf')} />
      </FormControl>
      <FormControl label="Weekly Rent">
        <Input startEnhancer="$" onChange={() => console.log('sdfsdf')} />
      </FormControl>
      <Button onClick={() => console.log('sdfsdf')}>Submit</Button>
    </Card>
  </Background>
);
