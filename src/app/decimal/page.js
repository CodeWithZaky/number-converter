"use client";
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
    <section className="h-auto w-[70%] mx-auto rounded-md border border-emerald-400 bg-emerald-900 flex flex-col justify-center items-center transition-all">
      <h1 className="bg-emerald-800 text-slate-300 w-full py-4 mb-5 text-center font-semibold">
        DECIMAL TO ALL
      </h1>
      <div className="w-full p-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start mb-4 my-3"
        >
          <input
            placeholder="decimal number"
            className="w-full border py-2 border-black text-center rounded-sm"
          />
          <button
            type="submit"
            className="border py-1 border-slate-900 bg-emerald-500 text-black rounded-sm px-4 my-1 active:bg-sky-700"
          >
            submit
          </button>
        </form>
        <div className="text-white my-10 space-y-2">
          <div className="flex flex-col w-full">
            <p className="">decimal</p>
            <p className="w-full bg-black/50 px-2 rounded-sm">{`${decimal}`}</p>
          </div>
          <div className="flex flex-col w-full">
            <p className="">binary</p>
            <p className="w-full bg-black/50 px-2 rounded-sm">{`${binary}`}</p>
          </div>
          <div className="flex flex-col w-full">
            <p className="">oktal</p>
            <p className="w-full bg-black/50 px-2 rounded-sm">{`${oktal}`}</p>
          </div>

          <div className="flex flex-col w-full">
            <p className="">hexadecimal</p>
            <p className="w-full bg-black/50 px-2 rounded-sm">{`${hexadecimal}`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Decimal;
