"use client";
import Swal from "sweetalert2";
import { useState } from "react";
import ResultComp from "@/components/molecules/ResultComp";
import PageContent from "@/components/organism/PageContent";
import { useBinaryToDecimal } from "@/hooks/binary/useBinaryToDecimal";
import { useBinaryToOktal } from "@/hooks/binary/useBinaryToOktal";
import { useBinaryToHexadecimal } from "@/hooks/binary/useBinaryToHexadecimal";

const Biner = () => {
  const [binary, setBiner] = useState<string>("0");
  const { decimal, setBinaryToDecimal } = useBinaryToDecimal();
  const { oktal, setBinaryToOktal } = useBinaryToOktal();
  const { hexadecimal, setBinaryToHeksadecimal } = useBinaryToHexadecimal();

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const binary = e.target[0].value;
    if (binary === "" || binary == 0) {
      Swal.fire({
        icon: "error",
        title: "input cannot be empty!",
      });
      return;
    }
    if (isNaN(binary)) {
      Swal.fire({
        icon: "error",
        title: "input must be a number!",
      });
      return;
    }
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] !== "0" && binary[i] !== "1") {
        Swal.fire({
          icon: "error",
          title: "Invalid binary input!",
        });
        return;
      }
    }
    setBiner(binary);
    setBinaryToDecimal(binary);
    setBinaryToOktal(binary);
    setBinaryToHeksadecimal(binary);
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
