"use client";
import clsx from "clsx";
import Hamburger from "../elements/Hamburger";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RouteLinks } from "../data/RouteLinks";

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
    <div>
      <div
        className={clsx(
          toggle ? "hidden" : "flex",
          "md:hidden absolute top-1 right-1 items-start bg-black p-2 gap-3 rounded-md cursor-pointer  border-2 border-retroOrange"
        )}
      >
        <Hamburger handleToggle={handleToggle} />
      </div>
      <div
        ref={wrapperRef}
        className={clsx(
          toggle ? "flex" : "hidden",
          "md:hidden absolute top-1 right-1 flex-col items-start bg-retroBrown border-2 border-retroOrange p-2 gap-3 rounded-md "
        )}
      >
        <IoMdClose
          className="self-end text-xl rounded-sm cursor-pointer bg-retroOrange"
          onClick={handleToggle}
        />
        <ul className="flex flex-col gap-2 my-2">
          {RouteLinks.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.route}
                className={clsx(
                  pathname == item.route
                    ? "text-retroWhite bg-retroOrange"
                    : "text-retroWhite bg-retroOrange/50",
                  "px-5 rounded-md"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
