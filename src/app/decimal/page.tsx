"use client";
import { useState } from "react";
import PageContent from "@/components/organism/PageContent";
import { useDecimalToBinary } from "@/hooks/decimal/useDecimalToBinary";
import { useDecimalToOktal } from "@/hooks/decimal/useDecimalToOktal";
import { useDecimalToHexadecimal } from "@/hooks/decimal/useDecimalToHexadecimal";
import Swal from "sweetalert2";
import ResultComp from "@/components/molecules/ResultComp";

const Decimal = () => {
  const [decimal, setDecimal] = useState(0);
  const { binary, setDecimalToBinary } = useDecimalToBinary();
  const { oktal, setDecimalToOktal } = useDecimalToOktal();
  const { hexadecimal, setDecimalToHexadecimal } = useDecimalToHexadecimal();

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let decimal = e.target[0].value;
    if (decimal === "" || decimal == 0) {
      Swal.fire({
        icon: "error",
        title: "input cannot be empty!",
      });
      return;
    }
    if (isNaN(decimal)) {
      Swal.fire({
        icon: "error",
        title: "input must be a number!",
      });
      return;
    }
    setDecimal(decimal);
    setDecimalToBinary(decimal);
    setDecimalToOktal(decimal);
    setDecimalToHexadecimal(decimal);
  };

  return (
    <PageContent
      title={"DECIMAL"}
      handleSubmit={handleSubmit}
      placeholder={"enter a decimal number"}
    >
      <ResultComp nameNum={"decimal"} result={decimal} />
      <ResultComp nameNum={"binary"} result={binary} />
      <ResultComp nameNum={"oktal"} result={oktal} />
      <ResultComp nameNum={"hexadecimal"} result={hexadecimal} />
    </PageContent>
  );
};

export default Decimal;
