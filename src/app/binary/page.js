"use client";
import Link from "next/link";
import { useState } from "react";

const Biner = () => {
  const [binary, setBiner] = useState(0);
  const [decimal, setDecimal] = useState(0);
  const [oktal, setOktal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const binary = e.target[0].value;
    if (isNaN(binary)) {
      alert("masukan angka");
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
    <section className="h-full w-[70%] mx-auto rounded-md border border-emerald-400 bg-emerald-900 flex flex-col justify-center items-center">
      <h1 className="bg-emerald-800 text-slate-300 w-full py-4 mb-5 text-center font-semibold">
        BINARY TO ALL
      </h1>
      <div className="w-full p-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start mb-4 my-3"
        >
          <input
            placeholder="binary number"
            className="w-full border py-2 border-black text-center rounded-sm"
          />
          <button
            type="submit"
            className="border py-1 border-slate-900 bg-emerald-500 text-black rounded-sm px-4 my-1 active:bg-sky-700"
          >
            submit
          </button>
        </form>
        <div className="text-white my-10">
          <div className="flex w-full border-y">
            <p className="w-1/3">binary</p>
            <p className="w-2/3">{`: ${binary}`}</p>
          </div>
          <div className="flex w-full border-b">
            <p className="w-1/3">oktal</p>
            <p className="w-2/3">{`: ${oktal}`}</p>
          </div>
          <div className="flex w-full border-b">
            <p className="w-1/3">decimal</p>
            <p className="w-2/3">{`: ${decimal}`}</p>
          </div>
          <div className="flex w-full border-b">
            <p className="w-1/3">hexadecimal</p>
            <p className="w-2/3">{`: ${hexadecimal}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biner;
