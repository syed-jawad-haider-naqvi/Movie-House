import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import useSWR from 'swr';

// Fetcher for SWR (for directors)
const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export default function DirectorsPage() {
  const { data: directors, error, isLoading } = useSWR('/api/directors', fetcher);
  const [movies, setMovies] = useState([]);

  // Fetching movies manually using useEffect
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch('/api/movies');
      const data = await res.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Directors | SJ Movie Info</title>
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Directors</h1>

        {isLoading && <p className="text-lg">Loading directors...</p>}
        {error && <p className="text-lg text-red-600">Error loading directors.</p>}

        {directors && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directors.map((director) => (
              <div key={director.id} className="bg-emerald-100 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{director.name}</h2>
                <p className="text-gray-700 mb-4">{director.biography}</p>

                <h3 className="font-medium mb-2 text-gray-800">Movies:</h3>
                <ul className="list-disc pl-5 marker:text-black">
                  {movies
                    .filter((movie) => movie.directorId === director.id)
                    .map((movie) => (
                      <li key={movie._id}>
                        <Link href={`/movies/${movie.id}`} className="text-blue-600 hover:underline">
                          {movie.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
