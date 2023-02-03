import React from "react";

interface Props {
  target: string;
  label: string;
  value: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFieldNumber: React.FC<Props> = ({
  target,
  label,
  value,
  handleInputChange,
}) => {
  return (
    <div>
      <label htmlFor={target}>{label}</label>
      <input
        type="number"
        id={target}
        name={target}
        value={value}
        onChange={handleInputChange}
        required
      />
    </div>
  );
};

export default InputFieldNumber;
