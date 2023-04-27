import Link from "next/link";

export default function Home() {
  const MenuItems = [
    { route: "/decimal-112210010", title: "decimal" },
    { route: "/binary-112210010", title: "binary" },
  ];

  return (
    <main className="min-w-full min-h-screen pt-2">
      <div className="flex flex-col gap-2 w-full h-full">
        {MenuItems.map((e, i) => {
          return (
            <div key={i}>
              <Link href={e.route} className="border rounded-lg py-1 px-2 bg-slate-700 text-white">
                {e.title}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
