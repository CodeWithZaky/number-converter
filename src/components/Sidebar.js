"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  const MenuItems = [
    { route: "/decimal", title: "decimal" },
    { route: "/binary", title: "binary" },
  ];
  return (
    <main className="bg-green-500 h-full flex flex-col items-end justify-center py-5 gap-7 text-lime-800 text-center">
      <div className="flex flex-col text-center gap-2">
        {MenuItems.map((e, i) => {
          return (
            <Link
              key={i}
              href={e.route}
              className={
                pathname == e.route
                  ? "rounded-r-sm px-20 py-2 bg-teal-900 text-white"
                  : "px-20 py-2 bg-green-500 text-white"
              }
            >
              {e.title}
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Sidebar;
