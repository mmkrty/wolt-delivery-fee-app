import React from "react";
import { Errors } from "../utils/models";
import InputError from "./InputError";

interface Props {
  target: string;
  label: string;
  value: number;
  errors: Errors;
  integerOnly?: boolean;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFieldNumber: React.FC<Props> = ({
  target,
  label,
  value,
  handleInputChange,
  integerOnly = false,
  errors,
  setErrors,
}) => {
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (+inputValue <= 0) {
      setErrors({ ...errors, [target]: "Please enter a positive number" });
    } else {
      if (integerOnly && !Number.isInteger(+inputValue)) {
        setErrors({ ...errors, [target]: "Please enter an integer" });
      } else {
        setErrors({ ...errors, [target]: "" });
      }
    }
  };

  return (
    <div className="grid grid-rows-2 relative">
      <label className="text-lg font-bold" htmlFor={target}>
        {label}
      </label>
      <input
        className={`py-1 px-2 rounded-sm shadow border w-full focus:outline-[#2ED7FE] ${
          errors[target] && "border-red-500"
        }`}
        type="number"
        id={target}
        name={label}
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        required
      />

      {errors[target] && <InputError>{errors[target]}</InputError>}
    </div>
  );
};

export default InputFieldNumber;
