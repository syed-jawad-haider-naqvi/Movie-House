import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import MovieCard from '../../components/MovieCard';

export default function GenreDetails({ genre, movies }) {
  return (
    <>
      <Head>
        <title>{genre.name} Movies | SJ Movie Info</title>
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">{genre.name} Movies</h1>
        <p className="text-gray-600 mb-6">Showing {movies.length} movies in this genre</p>
        
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-lg">No movies found in this genre.</p>
        )}
        
        <div className="mt-8">
          <Link 
            href="/genre"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Back to All Genres
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const data = require('../../public/data.json');
  
  const genre = data.genres.find(g => g.id === params.id);
  
  // Return 404 if genre doesn't exist
  if (!genre) {
    return {
      notFound: true
    };
  }
  
  // Filter movies by this genre
  const movies = data.movies.filter(movie => movie.genreId === params.id);
  
  return {
    props: {
      genre,
      movies
    }
  };
}