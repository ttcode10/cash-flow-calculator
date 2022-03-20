import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/images/backgroundImage.jpg';

import { Container } from './Container';

const HeroImage = styled.div`
  background: url('${backgroundImage}') no-repeat center center/cover;
  width: 100vw;
  height: 38vh;
`;

const BlackCover = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 38vh;
`;

interface BackgroundProps {
  children: any;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => (
  <HeroImage>
    <BlackCover>
      <Container>{children}</Container>
    </BlackCover>
  </HeroImage>
);
