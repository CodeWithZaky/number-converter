"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const links = [
    { id: 1, title: "decimal", href: "/decimal" },
    { id: 2, title: "binary", href: "/binary" },
  ];

  return (
    <>
      <div
        className={clsx(
          toggle ? "hidden" : "flex",
          "md:hidden absolute top-1 left-1 items-start bg-black p-2 gap-3 rounded-md cursor-pointer"
        )}
      >
        <Hamburger handleToggle={handleToggle} />
      </div>
      <div
        className={clsx(
          toggle ? "flex" : "hidden",
          "md:hidden absolute top-1 left-1 flex-col items-start bg-black p-2 gap-3 rounded-md"
        )}
      >
        <IoMdClose
          className="bg-white rounded-sm text-xl cursor-pointer"
          onClick={handleToggle}
        />
        <div className="flex flex-col text-white gap-2 my-2">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className={clsx(
                  pathname == link.href ? "text-emerald-400" : "text-white",
                  "bg-white/10 px-4 rounded-sm hover:bg-white/20"
                )}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
