"use client";
import clsx from "clsx";
import Hamburger from "../atoms/Hamburger";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RouteLinks } from "../tamplates/RouteLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
          {RouteLinks.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.route}
                className={clsx(
                  pathname == link.route ? "text-emerald-400" : "text-white",
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
