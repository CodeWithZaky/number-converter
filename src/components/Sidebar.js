"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsShieldFillExclamation } from "react-icons/bs";
import { clsx } from "clsx";

const Sidebar = ({ classname }) => {
  const pathname = usePathname();
  const MenuItems = [
    { route: "/decimal", title: "decimal" },
    { route: "/binary", title: "binary" },
  ];
  return (
    <main
      className={clsx(
        classname,
        "relative border-r-2 h-full flex flex-col items-start justify-start p-5 gap-7 text-lime-800 text-center"
      )}
    >
      <div className="flex flex-col text-center gap-2 text-lg tracking-widest">
        {MenuItems.map((e, i) => {
          return (
            <Link
              key={i}
              href={e.route}
              className={
                pathname == e.route
                  ? "text-emerald-500 transition-all text-start"
                  : "text-black transition-all text-start"
              }
            >
              {e.title}
            </Link>
          );
        })}
      </div>
      <BsShieldFillExclamation className="absolute bottom-2 left-2 text-black text-xl hover:text-2xl cursor-pointer transition-all" />
    </main>
  );
};

export default Sidebar;
