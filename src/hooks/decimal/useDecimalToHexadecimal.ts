import { useState } from "react";

export const useDecimalToHexadecimal = () => {
  const [hexadecimal, setHexadecimal] = useState<string>("0");

  const setDecimalToHexadecimal = (dec: string) => {
    let hex = "";
    let decimal = parseInt(dec);
    while (decimal > 0) {
      let remainder = decimal % 16;
      let hexDigit =
        remainder < 10
          ? remainder.toString()
          : String.fromCharCode(remainder + 55);
      hex = hexDigit + hex;
      decimal = Math.floor(decimal / 16);
    }
    setHexadecimal(hex.toString());
  };

  return { hexadecimal, setDecimalToHexadecimal };
};
