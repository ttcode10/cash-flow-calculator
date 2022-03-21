import * as React from 'react';
import { Input as BaseInput, SIZE } from 'baseui/input';

interface InputProps {
  startEnhancer?: string;
  endEnhancer?: string | Node;
  placeholder?: string;
  size?: SIZE['compact'] | SIZE['large'];
  error?: boolean;
  positive?: boolean;
  disabled?: boolean;
  onChange: () => void;
}

export const Input: React.FC<InputProps> = ({
  startEnhancer,
  endEnhancer,
  placeholder,
  size,
  error,
  positive,
  disabled,
  onChange,
}) => (
  <BaseInput
    startEnhancer={startEnhancer}
    placeholder={placeholder}
    endEnhancer={endEnhancer}
    size={size}
    error={error}
    positive={positive}
    disabled={disabled}
    onChange={onChange}
  />
);