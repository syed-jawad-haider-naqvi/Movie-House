import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import { useRouter } from 'next/router';

export default function MovieDetails({ movie, director, genre }) {
  const router = useRouter();

  // Show a loading state if fallback is true and page is still generating
  if (router.isFallback) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-xl">Loading movie details...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{movie.title} | SJ Movie Info</title>
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          
          <div className="mb-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
              {genre.name}
            </span>
            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {movie.releaseYear}
            </span>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-1">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-1 text-gray-700">{movie.rating}/10</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">{movie.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Director</h2>
            <p className="text-gray-700 mb-2">{director.name}</p>
            <Link 
              href={`/movies/${movie.id}/director`}
              className="text-blue-600 hover:underline"
            >
              View Director Details
            </Link>
          </div>
          
          <div className="mt-8">
            <button 
              onClick={() => router.back()}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Back to Movies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const data = require('../../../public/data.json');
  
  // Create paths for the first few movies for initial build
  const paths = data.movies.slice(0, 3).map(movie => ({
    params: { id: movie.id }
  }));
  
  return {
    paths,
    // Enable on-demand generation of other movie pages
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const data = require('../../../public/data.json');
  
  const movie = data.movies.find(m => m.id === params.id);
  
  // Return 404 if movie doesn't exist
  if (!movie) {
    return {
      notFound: true
    };
  }
  
  const director = data.directors.find(d => d.id === movie.directorId);
  const genre = data.genres.find(g => g.id === movie.genreId);
  
  return {
    props: {
      movie,
      director,
      genre
    },
    // ISR with 60 second revalidation
    revalidate: 60
  };
}