export interface SelectProps {
  optionValues: string[];
  onChange: (value: string) => void;
  defaultValue?: string;
}
