import * as React from 'react';
import { Button as BaseButton } from 'baseui/button';

interface ButtonProps {
  onClick: () => void;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <BaseButton onClick={onClick}>{children}</BaseButton>
);
