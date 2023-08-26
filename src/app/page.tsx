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
    <div className="flex items-center justify-center w-full h-full text-5xl font-bold">
      LOADING
      <span className="loading loading-ball loading-xs" />
      <span className="loading loading-ball loading-sm" />
      <span className="loading loading-ball loading-md" />
      <span className="loading loading-ball loading-lg" />
    </div>
  );
}
