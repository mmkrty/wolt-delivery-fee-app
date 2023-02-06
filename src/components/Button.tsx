import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({ children, type }) => {
  return (
    <button
      type={type}
      className="text-lg inline-block border-4 border-primary_light text-primary_dark py-2 my-2 rounded-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary_light  hover:font-bold active:scale-100 active:shadow"
    >
      {children}
    </button>
  );
};

export default Button;
