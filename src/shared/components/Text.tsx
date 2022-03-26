import * as React from 'react';
import { Heading as BaseHeading, HeadingLevel } from 'baseui/heading';

interface BaseHeadingTextProps {
  styleLevel?: number;
  color?: string;
  children: any;
}

interface HeadingTextProps {
  color?: string;
  children: any;
}

const BaseHeadingText: React.FC<BaseHeadingTextProps> = ({ styleLevel, color, children }) => (
  <HeadingLevel>
    <BaseHeading styleLevel={styleLevel} color={color}>
      {children}
    </BaseHeading>
  </HeadingLevel>
);

export const H1Text: React.FC<HeadingTextProps> = ({ color, children }) => (
  <BaseHeadingText styleLevel={1} color={color}>
    {children}
  </BaseHeadingText>
);

export const H2Text: React.FC<HeadingTextProps> = ({ color, children }) => (
  <BaseHeadingText styleLevel={2} color={color}>
    {children}
  </BaseHeadingText>
);

export const H3Text: React.FC<HeadingTextProps> = ({ color, children }) => (
  <BaseHeadingText styleLevel={3} color={color}>
    {children}
  </BaseHeadingText>
);

export const H4Text: React.FC<HeadingTextProps> = ({ color, children }) => (
  <BaseHeadingText styleLevel={4} color={color}>
    {children}
  </BaseHeadingText>
);

export const H5Text: React.FC<HeadingTextProps> = ({ color, children }) => (
  <BaseHeadingText styleLevel={5} color={color}>
    {children}
  </BaseHeadingText>
);

export const H6Text: React.FC<HeadingTextProps> = ({ color, children }) => (
  <BaseHeadingText styleLevel={6} color={color}>
    {children}
  </BaseHeadingText>
);
