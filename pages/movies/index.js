// pages/movies/index.js
import { useState } from 'react';
import Head from 'next/head';
import MovieCard from '../../components/MovieCard';
import Navbar from '../../components/Navbar';

export default function MoviesPage({ movies, genres }) {
  const [selectedGenre, setSelectedGenre] = useState('');
  
  // Filter movies by selected genre
  const filteredMovies = selectedGenre 
    ? movies.filter(movie => movie.genreId === selectedGenre)
    : movies;

  return (
    <>
      <Head>
        <title>Movies | SJ Movie Info</title>
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Movies</h1>
        
        {/* Genre Filter */}
        <div className="mb-6">
          <label htmlFor="genre-filter" className="block mb-2 font-medium">Filter by Genre:</label>
          <select
            id="genre-filter"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="border rounded-md p-2 w-full max-w-xs"
          >
            <option value="">All Genres</option>
            {genres.map(genre => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        
        {/* Movies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = require('../../public/data.json');
  
  return {
    props: {
      movies: data.movies,
      genres: data.genres
    },
    // Using ISR with revalidation every 60 seconds
    revalidate: 60
  };
}