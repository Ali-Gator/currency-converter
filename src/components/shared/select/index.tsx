import { ChangeEvent, FC, useCallback } from 'react';
import { SelectProps } from './props';

export const Select: FC<SelectProps> = ({ ...props }) => {
  const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    props.onChange && props.onChange(newValue);
  }, []);

  return (
    <select onChange={handleChange} value={props?.defaultValue || ''}>
      <option value="">Choose</option>
      {props.optionValues.map(value =>
        <option key={value} value={value}>{value}</option>
      )}
    </select>
  );
};
