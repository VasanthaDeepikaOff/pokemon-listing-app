import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-black text-white flex items-center flex-col justify-center h-screen">
      <Image
        src="/images/all-pokemon-pictures.jpg"
        alt="Logo"
        width={500}
        height={500}
        className="rounded-3xl mb-2 md:mb-4"
        />
      <h1 className="text-5xl font-bold text-white">Pokemon List App!</h1>
      <Link href="/login" className="text-3xl text-white mt-4 rounded inline-block transition duration-300 bg-amber-600 py-2 px-4 hover:bg-yellow-700 mt-1">Login</Link>
    </div>
  );
}
