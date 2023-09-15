"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsShieldFillExclamation } from "react-icons/bs";
import { clsx } from "clsx";
import { RouteLinks } from "../tamplates/RouteLinks";
import { useState } from "react";

const Sidebar = ({ classname }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  const pathname = usePathname();
  return (
    <div
      className={clsx(
        classname,
        "hidden md:flex",
        "border-r-2 border-retroBrown/10 h-full flex flex-col items-start justify-between p-1 md:p-5 gap-7 text-center transition-all"
      )}
    >
      <ul className="flex flex-col w-full gap-2 text-lg tracking-widest text-center transition-all">
        {RouteLinks.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.route}
              className={clsx(
                pathname == item.route
                  ? "text-retroWhite bg-retroBrown"
                  : "text-retroWhite bg-retroBrown/60",
                "w-full text-start rounded-md px-2 py-1 font-semibold tracking-wide transition-all"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
      <div className="relative">
        {isActive ? (
          <p className="absolute px-2 py-1 text-sm transition-all rounded-t rounded-r left-5 -top-6 whitespace-nowrap bg-retroBrown/90 text-retroBlue">
            Ahmad Zaky Ubaidillah @2023
          </p>
        ) : (
          ""
        )}
        <BsShieldFillExclamation
          onClick={handleActive}
          className={clsx(
            isActive ? "text-2xl" : "text-xl",
            "transition-all cursor-pointer text-retroBrown"
          )}
        />
      </div>
    </div>
  );
};

export default Sidebar;
