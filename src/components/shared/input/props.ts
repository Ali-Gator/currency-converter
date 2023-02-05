import { HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  min?: string;
}
