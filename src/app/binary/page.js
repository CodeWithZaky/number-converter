"use client";
import { useState } from "react";
import ResultComp from "../../components/ResultComp";

const Biner = () => {
  const [binary, setBiner] = useState(0);
  const [decimal, setDecimal] = useState(0);
  const [oktal, setOktal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const binary = e.target[0].value;
    if (binary == "") {
      alert("inputan harus di isi");
      return;
    }
    if (isNaN(binary)) {
      alert("masukan harus angka");
      return;
    }
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] !== "0" && binary[i] !== "1") {
        alert("Input bilangan biner tidak valid");
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
    <section className="h-auto w-[70%] mx-auto rounded-md border border-emerald-400 bg-emerald-900 flex flex-col justify-center items-center transition-all">
      <h1 className="w-full py-4 mb-5 font-semibold text-center bg-emerald-800 text-slate-300">
        BINARY TO ALL
      </h1>
      <div className="w-full p-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center my-3 mb-4"
        >
          <input
            placeholder="binary number"
            className="w-full py-2 text-center border border-black rounded-sm"
          />
          <button
            type="submit"
            className="px-4 py-1 my-1 text-black border rounded-sm border-slate-900 bg-emerald-500 active:bg-sky-700"
          >
            submit
          </button>
        </form>
        <div className="my-10 space-y-2 text-white">
          <ResultComp nameNum={"binary"} result={binary} />
          <ResultComp nameNum={"decimal"} result={decimal} />
          <ResultComp nameNum={"oktal"} result={oktal} />
          <ResultComp nameNum={"hexadecimal"} result={hexadecimal} />
        </div>
      </div>
    </section>
  );
};

export default Biner;
