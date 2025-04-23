import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
      <p className="text-gray-600 mb-2">{movie.description}</p>
      <p className="text-sm text-gray-500 mb-2">Release Year: {movie.releaseYear}</p>
      <p className="text-sm text-gray-500 mb-4">Rating: {movie.rating}</p>
      <Link href={`/movies/${movie.id}`} className="text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  );
}