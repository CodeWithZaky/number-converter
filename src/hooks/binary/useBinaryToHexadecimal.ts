import { useState } from "react";

export const useBinaryToHexadecimal = () => {
  const [hexadecimal, setHexadecimal] = useState<string>("0");

  const setBinaryToHeksadecimal = (bin: string) => {
    let decimal = 0;
    let i = 0;
    let binary = parseInt(bin);
    while (binary != 0) {
      let digit = binary % 10;
      decimal += digit * Math.pow(2, i);
      binary = Math.floor(binary / 10);
      i++;
    }

    let digits = [];
    while (decimal != 0) {
      let remainder = decimal % 16;
      if (remainder < 10) {
        digits.unshift(remainder);
      } else {
        digits.unshift(String.fromCharCode(remainder + 55));
      }
      decimal = Math.floor(decimal / 16);
    }

    let hex = digits.join("");
    setHexadecimal(hex);
  };
  return { hexadecimal, setBinaryToHeksadecimal };
};
