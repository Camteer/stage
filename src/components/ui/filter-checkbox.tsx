import React from 'react';
import { Checkbox } from '../ui/checkbox';

export interface FilterChecboxProps {
  text?: string | number;
  value: number;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}) => {
  
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[5px] w-[33px] h-[33px]  border-[#B3C0D2] border-[3px] data-[state=checked]:bg-[red] data-[state=checked]:border-[red]"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1 text-wrap">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};