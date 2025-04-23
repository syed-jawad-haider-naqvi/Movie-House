// pages/index.js
import { useRouter } from 'next/router';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Home({ trendingMovies }) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>SJ Movie Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to SJ Movie Info</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trending Movies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        
        <button 
          onClick={() => router.push('/genres')}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Browse Genres
        </button>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // In a real application, you might filter for trending movies
  // For this assignment, we'll just use all movies or the top-rated ones
  const data = require('../public/data.json');
  
  // Sort by rating to get "trending" movies
  const trendingMovies = [...data.movies].sort((a, b) => b.rating - a.rating);
  
  return {
    props: {
      trendingMovies
    },
    // Implement ISR with revalidation every 60 seconds
    revalidate: 60
  };
}