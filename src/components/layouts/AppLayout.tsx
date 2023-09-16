import React from "react";
import Navbar from "../fragments/Navbar";
import Sidebar from "../fragments/Sidebar";
import Guides from "../fragments/Guides";

const LayoutApp = ({ children }) => {
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

export default LayoutApp;
