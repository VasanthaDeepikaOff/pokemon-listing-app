import Link from "next/link";

export default async function Header() {
  return (
    <header className="bg-pink-700 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Pokemon List</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/pokemon" className="hover:text-gray-300 transition">
                Pokemon List
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-gray-300 transition">
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};