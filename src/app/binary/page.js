"use client";
import Swal from "sweetalert2";
import { useState } from "react";
import ResultComp from "../../components/molecules/ResultComp";
import PageContent from "../../components/organism/PageContent";

const Biner = () => {
  const [binary, setBiner] = useState(0);
  const [decimal, setDecimal] = useState(0);
  const [oktal, setOktal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const binary = e.target[0].value;
    if (binary === "" || binary == 0) {
      Swal.fire({
        icon: "error",
        title: "masukan tidak boleh kosong!",
      });
      return;
    }
    if (isNaN(binary)) {
      Swal.fire({
        icon: "error",
        title: "masukan harus angka!",
      });
      return;
    }
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] !== "0" && binary[i] !== "1") {
        Swal.fire({
          icon: "error",
          title: "Input bilangan biner tidak valid!",
        });
        return;
      }
    }
    setBiner(binary);
    binerToDecimal(binary);
    binerToOktal(binary);
    binerToHeksadecimal(binary);
  };
  const binerToDecimal = (binary) => {
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
  const binerToOktal = (binary) => {
    // konversi binary ke desimal terlebih dahulu
    let desimal = parseInt(binary, 2);
    let oktal = "";

    // konversi desimal ke oktal
    while (desimal > 0) {
      oktal = (desimal % 8).toString() + oktal;
      desimal = Math.floor(desimal / 8);
    }
    setOktal(oktal);
  };
  const binerToHeksadecimal = (binary) => {
    let decimal = 0;
    let i = 0;
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

  return (
    <PageContent
      title={"BINARY"}
      handleSubmit={handleSubmit}
      placeholder={"enter a binary number"}
    >
      <ResultComp nameNum={"binary"} result={binary} />
      <ResultComp nameNum={"decimal"} result={decimal} />
      <ResultComp nameNum={"oktal"} result={oktal} />
      <ResultComp nameNum={"hexadecimal"} result={hexadecimal} />
    </PageContent>
  );
};

export default Biner;
