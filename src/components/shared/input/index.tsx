import { ChangeEvent, FC, useCallback, useState } from 'react';
import { InputProps } from './props';

export const Input: FC<InputProps> = ({ ...props }) => {
  const [value, setValue] = useState(props.value ?? '');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    props.onChange && props.onChange(newValue);
  }, []);

  return (
    <input type={props.type}
           value={value}
           min={props.min}
           max={props.max}
           onChange={handleChange} />
  );
};
