import Link from "next/link";
const NavLink = () => {
  const MenuItems = [
    { route: "/decimal-112210010", title: "decimal" },
    { route: "/binary-112210010", title: "binary" },
  ];
  return (
    <>
      {MenuItems.map((e, i) => {
        return (
          <Link
            key={i}
            href={e.route}
            className="rounded px-[90px] py-[25px] bg-lime-700 text-white"
          >
            {e.title}
          </Link>
        );
      })}
    </>
  );
};

export default NavLink;
