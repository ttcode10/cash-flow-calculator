import * as React from 'react';
import { Card as BaseCard, StyledBody } from 'baseui/card';

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
        }),
      },
    }}
  >
    <StyledBody>
      Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis
      nisl. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
      facilisis nisl. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus
      ex, non facilisis nisl. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
      faucibus ex, non facilisis nisl. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
      ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus pharetra hend rerit vel non mi.
      Nulla ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus pharetra hend rerit vel
      non mi. Nulla ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus pharetra hend
      rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus
      pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Proin ut dui sed
      metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Proin ut
      dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.
      Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis
      nisl. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
      facilisis nisl. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus
      ex, non facilisis nisl.
    </StyledBody>
    {children}
  </BaseCard>
);
