import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto relative flex items-center justify-center">
        
        {/* Logo aligned to the left */}
        <Link
          href="/"
          className="absolute left-4 text-xl font-bold hover:text-blue-400"
        >
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
      </div>
    </nav>
  );
}
