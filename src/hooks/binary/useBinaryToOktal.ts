import {useState} from 'react'

export const useBinaryToOktal = () => {
  const [oktal, setOktal] = useState<string>("0")  
  
  const setBinaryToOktal = (binary:string) => {
    let desimal = parseInt(binary, 2);
    let oktal = "";
    while (desimal > 0) {
      oktal = (desimal % 8).toString() + oktal;
      desimal = Math.floor(desimal / 8);
    }
    setOktal(oktal);
  };

  return{oktal,setBinaryToOktal}
}
