import React from "react";
import { Errors } from "../utils/models";

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
  // const [error, setError] = React.useState<string>("");

  // const handleBlur = React.useCallback(
  //   (event: React.FocusEvent<HTMLInputElement>) => {
  //     const inputValue = event.target.value;
  //     if (integerOnly && !Number.isInteger(+inputValue)) {
  //       setErrors({ ...errors, [target]: "Input must be integer" });
  //     } else {
  //       setErrors({ ...errors, [target]: "" });
  //     }
  //   },
  //   [integerOnly, errors, setErrors, target]
  // );

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
    <div>
      <label htmlFor={target}>{label}</label>
      <input
        type="number"
        id={target}
        name={target}
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        min="0"
        required
      />
      {errors[target] && <p style={{ color: "red" }}>{errors[target]}</p>}
    </div>
  );
};

export default InputFieldNumber;
