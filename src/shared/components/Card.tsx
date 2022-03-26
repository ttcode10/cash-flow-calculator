import * as React from 'react';
import { Card as BaseCard } from 'baseui/card';

import { spacing } from '../themes';

interface CardProps {
  title?: string;
  children?: any;
}

export const Card: React.FC<CardProps> = ({ title, children }) => (
  <BaseCard
    title={title}
    overrides={{
      Root: {
        style: () => ({
          border: 'none',
          borderRadius: `${spacing.spacing0x}`,
          width: '100%',
          padding: `${spacing.spacing2x}`,
        }),
      },
    }}
  >
    {children}
  </BaseCard>
);
