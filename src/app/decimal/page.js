"use client";
import { useState } from "react";
import ResultComp from "../../components/ResultComp";

const Decimal = () => {
  const [decimal, setDecimal] = useState(0);
  const [binary, setBiner] = useState(0);
  const [oktal, setOktal] = useState(0);
  const [hexadecimal, setHexadecimal] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let decimal = e.target[0].value;
    if (decimal == "") {
      alert("inputan harus di isi");
      return;
    }
    if (isNaN(decimal)) {
      alert("masukkan harus angka");
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
      <h1 className="w-full py-4 mb-5 font-semibold text-center bg-emerald-800 text-slate-300">
        DECIMAL TO ALL
      </h1>
      <div className="w-full p-3">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start justify-center my-3 mb-4"
        >
          <input
            placeholder="decimal number"
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
          <ResultComp nameNum={"decimal"} result={decimal} />
          <ResultComp nameNum={"binary"} result={binary} />
          <ResultComp nameNum={"oktal"} result={oktal} />
          <ResultComp nameNum={"hexadecimal"} result={hexadecimal} />
        </div>
      </div>
    </section>
  );
};

export default Decimal;
