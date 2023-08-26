import { useState } from "react";

export const useDecimalToBinary = () => {
  const [binary, setBinary] = useState<string>("0");

  const setDecimalToBinary = (dec: string) => {
    let binaryNumber = "";
    let decimal = parseInt(dec);
    while (decimal > 0) {
      let remainder = decimal % 2;
      binaryNumber = remainder + binaryNumber;
      decimal = Math.floor(decimal / 2);
    }

    setBinary(binaryNumber.toString());
  };

  return { binary, setDecimalToBinary };
};
