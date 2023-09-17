"use client";
import { useState, useCallback } from "react";
import Swal from "sweetalert2";
import ResultComp from "@/src/components/fragments/ResultComp";
import PageLayout from "@/src/components/layouts/PageLayout";
import { useDecimalToBinary } from "@/hooks/decimal/useDecimalToBinary";
import { useDecimalToOktal } from "@/hooks/decimal/useDecimalToOktal";
import { useDecimalToHexadecimal } from "@/hooks/decimal/useDecimalToHexadecimal";

const Decimal = () => {
  const [decimal, setDecimal] = useState(0);
  const { binary, setDecimalToBinary } = useDecimalToBinary();
  const { oktal, setDecimalToOktal } = useDecimalToOktal();
  const { hexadecimal, setDecimalToHexadecimal } = useDecimalToHexadecimal();

  const handleInputChange = useCallback(
    (inputValue: string) => {
      setDecimal(Number(inputValue));
      setDecimalToBinary(inputValue);
      setDecimalToOktal(inputValue);
      setDecimalToHexadecimal(inputValue);
    },
    [setDecimal, setDecimalToBinary, setDecimalToOktal, setDecimalToHexadecimal]
  );

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = e.target[0].value;
    if (inputValue === "" || inputValue == 0) {
      Swal.fire({
        icon: "error",
        title: "Input cannot be empty!",
      });
    } else if (isNaN(inputValue)) {
      Swal.fire({
        icon: "error",
        title: "Input must be a number!",
      });
    } else {
      handleInputChange(inputValue);
    }
  };

  return (
    <PageLayout
      title={"DECIMAL"}
      handleSubmit={handleSubmit}
      placeholder={"enter a decimal number"}
    >
      <ResultComp nameNum={"decimal"} result={decimal} />
      <ResultComp nameNum={"binary"} result={binary} />
      <ResultComp nameNum={"oktal"} result={oktal} />
      <ResultComp nameNum={"hexadecimal"} result={hexadecimal} />
    </PageLayout>
  );
};

export default Decimal;
