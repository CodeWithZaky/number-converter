"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsShieldFillExclamation } from "react-icons/bs";
import { clsx } from "clsx";
import { RouteLinks } from "../tamplates/RouteLinks";

const Sidebar = ({ classname }) => {
  const pathname = usePathname();
  return (
    <main
      className={clsx(
        classname,
        "hidden md:flex",
        "relative border-r-2 border-retroBrown/10 h-full flex flex-col items-start justify-start p-1 md:p-5 gap-7 text-center transition-all"
      )}
    >
      <div className="flex flex-col w-full gap-2 text-lg tracking-widest text-center transition-all">
        {RouteLinks.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.route}
              className={clsx(
                pathname == item.route
                  ? "text-retroWhite bg-retroBrown"
                  : "text-retroWhite bg-retroBrown/60",
                "w-full text-start rounded-xl px-2 py-1 font-semibold tracking-wide transition-all"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <BsShieldFillExclamation className="absolute text-xl transition-all cursor-pointer text-retroBrown bottom-2 left-2 hover:text-2xl" />
    </main>
  );
};

export default Sidebar;
