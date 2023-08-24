import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full py-2 text-center border border-black rounded-sm"
    />
  );
};

export default Input;
