import { useState } from "react";

export const useDecimalToBinary = () => {
  const [binary, setBinary] = useState(0);

  const setDecimalToBinary = (decimal) => {
    let binaryNumber = "";

    while (decimal > 0) {
      let remainder = decimal % 2;
      binaryNumber = remainder + binaryNumber;
      decimal = Math.floor(decimal / 2);
    }

    setBinary(binaryNumber);
  };

  return { binary, setDecimalToBinary };
};
