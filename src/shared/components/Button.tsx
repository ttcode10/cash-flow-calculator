import * as React from 'react';
import { Button as BaseButton } from 'baseui/button';

interface ButtonProps {
  onClick: () => void;
  children: string;
  isLoading: boolean;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, isLoading, disabled }) => (
  <BaseButton onClick={onClick} disabled={disabled} isLoading={isLoading}>
    {children}
  </BaseButton>
);
