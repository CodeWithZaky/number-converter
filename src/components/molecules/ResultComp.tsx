import React from "react";

const ResultComp = ({ nameNum, result }) => {
  return (
    <div className="flex flex-col w-full">
      <p className="">{nameNum}</p>
      <p className="w-full h-[25px] px-2 rounded-sm bg-black/50">{`${result}`}</p>
    </div>
  );
};

export default ResultComp;
