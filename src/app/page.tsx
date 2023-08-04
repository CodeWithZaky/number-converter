"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname == "/") {
      router.push("/decimal");
    }
  }, [pathname, router]);

  return (
    <div className="w-full h-full text-5xl font-bold flex justify-center items-center text-white">
      LOADING...
    </div>
  );
}
