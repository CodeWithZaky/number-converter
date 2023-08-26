import { useState } from "react";

export const useDecimalToOktal = () => {
  const [oktal, setOktal] = useState(0);

  const setDecimalToOktal = (decimal) => {
    let oktal = "";
    while (decimal > 0) {
      oktal = (decimal % 8) + oktal;
      decimal = Math.floor(decimal / 8);
    }
    setOktal(oktal);
  };

  return { oktal, setDecimalToOktal };
};
