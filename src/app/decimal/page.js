"use client";
import { useState } from "react";
import ResultComp from "../../components/molecules/ResultComp";
import Swal from "sweetalert2";
import PageContent from "../../components/organism/PageContent";

const Decimal = () => {
  const [decimal, setDecimal] = useState(0);
  const [binary, setBiner] = useState(0);
  const [oktal, setOktal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let decimal = e.target[0].value;
    if (decimal === "" || decimal == 0) {
      Swal.fire({
        icon: "error",
        title: "masukan tidak boleh kosong!",
      });
      return;
    }
    if (isNaN(decimal)) {
      Swal.fire({
        icon: "error",
        title: "masukan harus angka!",
      });
      return;
    }
    setDecimal(decimal);
    decimalToBiner(decimal);
    decimalToOktal(decimal);
    decimalToHexadecimal(decimal);
  };
  const decimalToBiner = (decimal) => {
    let binaryNumber = "";
    while (decimal > 0) {
      let remainder = decimal % 2;
      binaryNumber = remainder + binaryNumber;
      decimal = Math.floor(decimal / 2);
    }
    setBiner(binaryNumber);
  };
  const decimalToOktal = (decimal) => {
    let oktal = "";
    while (decimal > 0) {
      oktal = (decimal % 8) + oktal;
      decimal = Math.floor(decimal / 8);
    }
    setOktal(oktal);
  };
  const decimalToHexadecimal = (decimal) => {
    let hex = "";
    while (decimal > 0) {
      let remainder = decimal % 16;
      let hexDigit =
        remainder < 10
          ? remainder.toString()
          : String.fromCharCode(remainder + 55);
      hex = hexDigit + hex;
      decimal = Math.floor(decimal / 16);
    }
    setHexadecimal(hex);
  };

  return (
    <PageContent
      title={"DECIMAL"}
      handleSubmit={handleSubmit}
      placeholder={"enter a decimal number"}
    >
      <ResultComp nameNum={"decimal"} result={decimal} />
      <ResultComp nameNum={"binary"} result={binary} />
      <ResultComp nameNum={"oktal"} result={oktal} />
      <ResultComp nameNum={"hexadecimal"} result={hexadecimal} />
    </PageContent>
  );
};

export default Decimal;
