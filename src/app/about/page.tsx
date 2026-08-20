"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AboutRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#about");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center pt-28 pb-16 text-[#6B6B6B]">
      <p>Redirecting to About Us section...</p>
    </div>
  );
}
