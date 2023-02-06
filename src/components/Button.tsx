import React from "react";

interface Props {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="text-lg inline-block border-2 border-[#2ED7FE] text-[#001464] py-2 my-2 rounded-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#2ED7FE]  hover:font-bold active:scale-100 active:shadow"
    >
      {children}
    </button>
  );
};

export default Button;
