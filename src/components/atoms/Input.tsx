import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full py-2 text-center border rounded-md text-retroBrown bg-retroOrange/80 border-retroOrange focus:outline-retroOrange placeholder-retroBrown/70"
    />
  );
};

export default Input;
