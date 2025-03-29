"use client";

import { useRouter } from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();

  return (
      <div className="max-w-4xl min-h-[90vh] bg-amber-100 mx-auto p-8 my-16">
        <button
        onClick={() => router.back()}
        className="px-4 py-2 bg-yellow-500 text-white rounded"
      >
        ← Go Back
      </button>
        <div className="pt-4">{children}</div>
      </div>
  );
}
