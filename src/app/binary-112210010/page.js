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
    const hexLookup = {
      "0000": "0",
      "0001": "1",
      "0010": "2",
      "0011": "3",
      "0100": "4",
      "0101": "5",
      "0110": "6",
      "0111": "7",
      1000: "8",
      1001: "9",
      1010: "A",
      1011: "B",
      1100: "C",
      1101: "D",
      1110: "E",
      1111: "F",
    };

    let hex = "";
    // Padd binary string with zeroes until its length is a multiple of 4
    binary = binary.padStart(Math.ceil(binary.length / 4) * 4, "0");
    // Group binary string into chunks of 4
    const binaryChunks = binary.match(/.{1,4}/g);

    // Convert each binary chunk to its corresponding hex value
    for (let i = 0; i < binaryChunks.length; i++) {
      hex += hexLookup[binaryChunks[i]];
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
          x
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center my-3"
        >
          <input
            placeholder="binary"
            defaultValue={binary}
            className="border border-black rounded-lg text-center"
          />
          <button
            type="submit"
            className="border bg-sky-300 rounded-lg px-2 my-1 active:bg-sky-700"
          >
            submit
          </button>
        </form>
        <div>{`binary = ${binary}`}</div>
        <div>{`decimal = ${decimal}`}</div>
        <div>{`oktal = ${oktal}`}</div>
        <div>{`hexadecimal = ${hexadecimal}`}</div>
      </div>
    </main>
  );
};

export default Biner;
