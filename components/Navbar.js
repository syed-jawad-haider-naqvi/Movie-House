// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          SJ Movie Info
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/movies" className="hover:text-blue-300">
            Movies
          </Link>
          <Link href="/genres" className="hover:text-blue-300">
            Genres
          </Link>
          <Link href="/directors" className="hover:text-blue-300">
            Directors
          </Link>
          <Link href="/help" className="hover:text-blue-300">
            Help
          </Link>
        </div>
      </div>
    </nav>
  );
}