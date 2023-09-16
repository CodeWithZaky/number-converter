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
    <div className="flex items-center justify-center w-full h-full">
      <h3 className="text-3xl font-bold text-center md:text-6xl text-retroPink">
        LOADING
        <span className="loading loading-ball loading-lg" />
        <span className="loading loading-ball loading-lg" />
        <span className="loading loading-ball loading-lg" />
      </h3>
    </div>
  );
}
