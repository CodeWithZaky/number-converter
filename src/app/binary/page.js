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
    <main className="h-full w-full flex justify-center items-center bg-teal-900">
      <div className="flex flex-col justify-center items-center">
        <section className="border border-lime-700 flex flex-col justify-center items-center">
          <h1 className="bg-lime-300 text-black w-full text-center font-mono font-semibold">
            BINARY TO ALL
          </h1>
          <div className="bg-lime-900 p-3 font-mono">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center mb-4 my-3"
            >
              <input
                placeholder="binary number"
                className="border border-black text-center rounded-sm"
              />
              <button
                type="submit"
                className="border border-slate-900 bg-lime-300 text-black rounded-sm px-2 my-1 active:bg-sky-700"
              >
                submit
              </button>
            </form>
            <section className="text-white">
              <p>{`binary = ${binary}`}</p>
              <p>{`decimal = ${decimal}`}</p>
              <p>{`oktal = ${oktal}`}</p>
              <p>{`hexadecimal = ${hexadecimal}`}</p>
            </section>
          </div>
        </section>
        <section className="flex justify-between w-full mt-1 font-mono">
          <Link
            href={"/"}
            className="rounded-sm bg-lime-500 px-2 border border-slate-700"
          >
            &larr; home
          </Link>
          <Link
            href={"/decimal-112210010"}
            className="rounded-sm bg-lime-500 px-2 border border-slate-700"
          >
            &larr; decimal to
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Biner;
