"use client";
import Link from "next/link";
import { useState } from "react";

const Decimal = () => {
  const [decimal, setDecimal] = useState(0);
  const [binary, setBiner] = useState(0);
  const [oktal, setOktal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let decimal = e.target[0].value;
    if (isNaN(decimal)) {
      alert("masukkan angka");
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
    <main className="min-h-screen min-w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <section className="border border-lime-700 flex flex-col justify-center items-center">
          <h1 className="bg-lime-300 text-black w-full text-center font-mono font-semibold">
            DECIMAL TO ALL
          </h1>
          <div className="bg-lime-900 p-3 font-mono">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center mb-4 my-3"
            >
              <input
                placeholder="decimal number"
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
              <div>{`decimal = ${decimal}`}</div>
              <div>{`binary = ${binary}`}</div>
              <div>{`oktal = ${oktal}`}</div>
              <div>{`hexadecimal = ${hexadecimal}`}</div>
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
            href={"/binary-112210010"}
            className="rounded-sm bg-lime-500 px-2 border border-slate-700"
          >
            &larr; binary to
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Decimal;
