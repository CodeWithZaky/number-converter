"use client";
import Link from "next/link";
import { useState } from "react";

const Decimal = () => {
  const [decimal, setDecimal] = useState(0);
  const [biner, setBiner] = useState(0);
  const [oktal, setOktal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let decimal = e.target[0].value;
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
    <main className="min-h-screen min-w-full flex flex-col justify-center items-center">
      <div className="relative border border-sky-500 p-3 rounded-lg">
        <Link
          href={"/"}
          className="absolute -top-7 right-0 rounded-md bg-red-500 px-2 text-white"
        >
          X
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center my-3"
        >
          <input
            placeholder="decimal"
            className="border border-black rounded-lg text-center"
          />
          <button
            type="submit"
            className="border bg-sky-300 rounded-lg px-2 my-1 active:bg-sky-700"
          >
            submit
          </button>
        </form>
        <div>{`decimal = ${decimal}`}</div>
        <div>{`biner = ${biner}`}</div>
        <div>{`oktal = ${oktal}`}</div>
        <div>{`hexadecimal = ${hexadecimal}`}</div>
      </div>
    </main>
  );
};

export default Decimal;
