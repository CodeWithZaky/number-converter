import { useState } from "react";

export const useDecimalToOktal = () => {
  const [oktal, setOktal] = useState<string>("0");

  const setDecimalToOktal = (dec: string) => {
    let oktal = "";
    let decimal = parseInt(dec);
    while (decimal > 0) {
      oktal = (decimal % 8) + oktal;
      decimal = Math.floor(decimal / 8);
    }
    setOktal(oktal.toString());
  };

  return { oktal, setDecimalToOktal };
};
