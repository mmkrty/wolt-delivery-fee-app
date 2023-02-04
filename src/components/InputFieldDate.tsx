import React from "react";

interface Props {
  target: string;
  label: string;
  value: string;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFieldDate: React.FC<Props> = ({
  target,
  label,
  value,
  handleDateChange,
}) => {
  return (
    <div>
      <label htmlFor={target}>{label}</label>
      <input
        type="datetime-local"
        id={target}
        name={label}
        value={value}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default InputFieldDate;
