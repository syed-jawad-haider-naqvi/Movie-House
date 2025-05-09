import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import { useRouter } from 'next/router';

export default function DirectorDetails({ director, directedMovies, movieId }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-xl">Loading director details...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{director.name} | SJ Movie Info</title>
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-emerald-300 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{director.name}</h1>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Biography</h2>
            <p className="text-gray-700">{director.biography}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-900">Directed Movies</h2>
            <ul className="list-disc pl-5">
              {directedMovies.map(movie => (
                <li key={movie._id} className="mb-1">
                  <Link href={`/movies/${movie.id}`} className="text-blue-600 hover:underline">
                    {movie.title} ({movie.releaseYear})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <button
              onClick={() => router.back()}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors mr-4"
            >
              Back to Movie
            </button>

            <Link
              href="/directors"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View All Directors
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  try {
    // 1. Fetch movie to get directorId
    const movieRes = await fetch(`http://localhost:3000/api/movies/${params.id}`);
    if (!movieRes.ok) return { notFound: true };
    const movie = await movieRes.json();
   
    // 2. Fetch director data
    const directorRes = await fetch(`http://localhost:3000/api/directors/${movie.directorId}`);
    if (!directorRes.ok) return { notFound: true };

    const { director, directedMovies } = await directorRes.json();
    
    return {
      props: {
        movieId: movie.id,
        director,
        directedMovies
      },
      revalidate: 60
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
}
