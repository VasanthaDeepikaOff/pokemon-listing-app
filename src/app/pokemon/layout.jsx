"use client";

import { SessionProvider } from "next-auth/react";

export default function PokemonLayout({ children, sidebar }) {

  return (
    <SessionProvider>
      <div className="flex bg-black">
        <aside className="w-1/2 sm:w-1/4 md:w-1/5 text-white">{sidebar}</aside>
        <main className="flex-1">{children}</main>
      </div>
    </SessionProvider>
  );
}
