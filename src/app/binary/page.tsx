"use client";
import Swal from "sweetalert2";
import { useCallback, useState } from "react";
import ResultComp from "@/src/components/fragments/ResultComp";
import PageLayout from "@/src/components/layouts/PageLayout";
import { useBinaryToDecimal } from "@/hooks/binary/useBinaryToDecimal";
import { useBinaryToOktal } from "@/hooks/binary/useBinaryToOktal";
import { useBinaryToHexadecimal } from "@/hooks/binary/useBinaryToHexadecimal";

const Biner = () => {
  const [binary, setBinary] = useState<string>("0");
  const { decimal, setBinaryToDecimal } = useBinaryToDecimal();
  const { oktal, setBinaryToOktal } = useBinaryToOktal();
  const { hexadecimal, setBinaryToHeksadecimal } = useBinaryToHexadecimal();

  const handleInputChange = useCallback(
    (binary: string) => {
      setBinary(binary);
      setBinaryToDecimal(binary);
      setBinaryToOktal(binary);
      setBinaryToHeksadecimal(binary);
    },
    [setBinary, setBinaryToDecimal, setBinaryToOktal, setBinaryToHeksadecimal]
  );

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

    handleInputChange(binary);
  };

  return (
    <PageLayout
      title={"BINARY"}
      handleSubmit={handleSubmit}
      placeholder={"enter a binary number"}
    >
      <ResultComp nameNum={"binary"} result={binary} />
      <ResultComp nameNum={"decimal"} result={decimal} />
      <ResultComp nameNum={"oktal"} result={oktal} />
      <ResultComp nameNum={"hexadecimal"} result={hexadecimal} />
    </PageLayout>
  );
};

export default Biner;
