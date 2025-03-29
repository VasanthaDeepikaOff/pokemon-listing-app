"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PokemonPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log(status);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin"); // Redirect to login
    }

    if (session) {
      const logoutTimer = setTimeout(() => {
        signOut(); // Auto logout after session expires
      }, 300 * 1000); // 60 seconds

      return () => clearTimeout(logoutTimer); // Cleaning up on unmount
    }

  }, [session, status, router]);

  return (
    <div className="p-6">
      <h1 className="text-3xl text-white">Welcome to the Pokemon Listing</h1>
      <p className="text-gray-400">Click on the list to see details.</p>
    </div>
  );
}
