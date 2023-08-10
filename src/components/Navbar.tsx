"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [links] = useState([
    { id: 1, title: "decimal", href: "/decimal" },
    { id: 2, title: "binary", href: "/binary" },
  ]);
  const pathname = usePathname();

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggle(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div
        className={clsx(
          toggle ? "hidden" : "flex",
          "md:hidden absolute top-1 left-1 items-start bg-black p-2 gap-3 rounded-md cursor-pointer  border-2 border-white"
        )}
      >
        <Hamburger handleToggle={handleToggle} />
      </div>
      <div
        ref={wrapperRef}
        className={clsx(
          toggle ? "flex" : "hidden",
          "md:hidden absolute top-1 left-1 flex-col items-start bg-black border-2 border-emerald-400 p-2 gap-3 rounded-md "
        )}
      >
        <IoMdClose
          className="text-xl bg-white rounded-sm cursor-pointer"
          onClick={handleToggle}
        />
        <div className="flex flex-col gap-2 my-2 text-white">
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                className={clsx(
                  pathname == link.href ? "text-emerald-400" : "text-white",
                  "bg-white/20 px-5 rounded-md hover:bg-white/20"
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
