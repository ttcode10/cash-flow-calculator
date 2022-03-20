import * as React from 'react';
import { Heading as BaseHeading, HeadingLevel } from 'baseui/heading';

interface HeadingProps {
  styleLevel: number;
  color?: string;
  alignContent?: 'center' | 'start' | 'end';
  children: string;
}

export const Heading: React.FC<HeadingProps> = ({ styleLevel, color, alignContent, children }) => (
  <HeadingLevel>
    <BaseHeading styleLevel={styleLevel} color={color} alignContent={alignContent}>
      {children}
    </BaseHeading>
  </HeadingLevel>
);
