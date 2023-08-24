import React from "react";
import Navbar from "../molecules/Navbar";
import Sidebar from "../molecules/Sidebar";
import Guides from "../molecules/Guides";

const LayoutContent = ({ children }) => {
  return (
    <div className="flex items-center justify-between w-full h-full mx-auto">
      <Sidebar classname={"w-1/4"} />
      <div className="relative flex items-center justify-center w-full h-full md:w-2/4">
        <Navbar />
        {children}
      </div>
      <Guides />
    </div>
  );
};

export default LayoutContent;
