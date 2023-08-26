import {useState} from 'react'

export const useBinaryToDecimal = () => {
    const [decimal, setDecimal] = useState<number>(0)

    const setBinaryToDecimal = (binary:string) => {
        let decimal = 0;
        let power = 0;
        for (let i = binary.length - 1; i >= 0; i--) {
          if (binary[i] === "1") {
            decimal += Math.pow(2, power);
          }
          power++;
        }
        setDecimal(decimal);
      };

return{decimal,setBinaryToDecimal}
    }
