import * as React from 'react';
import { FormControl as BaseFormControl } from 'baseui/form-control';

interface FormControlProps {
  error?: boolean;
  disabled?: boolean;
  label: string;
  caption?: () => string;
  children: any;
}

export const FormControl: React.FC<FormControlProps> = ({
  error,
  disabled,
  label,
  caption,
  children,
}) => (
  <BaseFormControl label={label} caption={caption} disabled={disabled} error={error}>
    {children}
  </BaseFormControl>
);
