import React from "react";
import { Errors } from "../utils/models";
import InputError from "./InputError";

interface Props {
  target: string;
  label: string;
  value: string;
  errors: Errors;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
  handleDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFieldDate: React.FC<Props> = ({
  target,
  label,
  value,
  handleDateChange,
  errors,
  setErrors,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDateTime = new Date(event.target.value);
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
      event.preventDefault();
      setErrors({
        ...errors,
        [target]: "You cannot select a previous time",
      });
      return;
    }

    setErrors({ ...errors, [target]: "" });

    handleDateChange(event);
  };

  return (
    <div className="grid grid-rows-2 relative">
      <label className="text-lg font-bold" htmlFor={target}>
        {label}
      </label>
      <input
        className={`py-1 px-2 rounded-sm shadow border focus:outline-[#2ED7FE] active:outline-[#2ED7FE] ${
          errors[target] && "border-red-500"
        }`}
        type="datetime-local"
        id={target}
        name={label}
        value={value}
        onChange={handleInputChange}
        required
      />
      {errors[target] && <InputError> {errors[target]}</InputError>}
    </div>
  );
};

export default InputFieldDate;
