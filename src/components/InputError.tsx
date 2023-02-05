import React from "react";

interface Props {
  children: React.ReactNode;
}

const InputError: React.FC<Props> = ({ children }) => {
  return (
    <p className="text-red-500 text-xs italic absolute -bottom-5">{children}</p>
  );
};

export default InputError;
