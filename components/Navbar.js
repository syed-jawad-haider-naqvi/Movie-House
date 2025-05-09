import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto relative flex items-center justify-between">
        {/* Logo aligned to the left */}
        <Link href="/" className="text-xl font-bold hover:text-blue-400">
          SJ Movie Info
        </Link>

        {/* Centered nav items */}
        <div className="flex space-x-6 text-center">
          <Link href="/" className="hover:text-blue-300 font-semibold">
            Home
          </Link>
          <Link href="/movies" className="hover:text-blue-300 font-semibold">
            Movies
          </Link>
          <Link href="/genre" className="hover:text-blue-300 font-semibold">
            Genres
          </Link>
          <Link href="/directors" className="hover:text-blue-300 font-semibold">
            Directors
          </Link>
          <Link href="/help" className="hover:text-blue-300 font-semibold">
            Help
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-500"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}
