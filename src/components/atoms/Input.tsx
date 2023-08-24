import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full py-2 text-center text-black border rounded-md bg-retroWhite border-retroOrange focus:outline-retroOrange"
    />
  );
};

export default Input;
