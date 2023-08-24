import React from "react";

const ResultComp = ({ nameNum, result }) => {
  return (
    <div className="flex flex-col w-full ">
      <p className="text-retroOrange">{nameNum}</p>
      <p className="w-full h-[30px] flex items-center px-3 rounded-md bg-retroOrange/40 text-retroWhite">{`${result}`}</p>
    </div>
  );
};

export default ResultComp;
