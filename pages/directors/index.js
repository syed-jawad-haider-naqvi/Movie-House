import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import useSWR from 'swr';

// Fetcher function for useSWR
const fetcher = async () => {
  const response = await fetch('/api/directors');
  const data = await response.json();
  return data;
};

export default function DirectorsPage() {
  const { data, error, isLoading } = useSWR('/api/directors', fetcher);
  
  return (
    <>
      <Head>
        <title>Directors | SJ Movie Info</title>
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Directors</h1>
        
        {isLoading && <p className="text-lg">Loading directors...</p>}
        
        {error && <p className="text-lg text-red-600">Error loading directors.</p>}
        
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.directors.map(director => (
              <div key={director.id} className="bg-emerald-100 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{director.name}</h2>
                <p className="text-gray-700 mb-4">{director.biography}</p>
                
                <h3 className="font-medium mb-2 text-gray-800">Movies:</h3>
                <ul className="list-disc pl-5 marker:text-black">
                  {data.directorMovies[director.id].map(movie => (
                    <li key={movie.id}>
                      <Link 
                        href={`/movies/${movie.id}`}
                        className="text-blue-600 hover:underline"
                      >
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