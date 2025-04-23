import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../components/Navbar';

export default function GenresPage({ genres }) {
  return (
    <>
      <Head>
        <title>Genres | SJ Movie Info</title>
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Browse by Genre</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genres.map(genre => (
            <Link 
              key={genre.id}
              href={`/genre/${genre.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 text-center transition-shadow"
            >
              <h2 className="text-xl font-semibold">{genre.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = require('../../public/data.json');
  
  return {
    props: {
      genres: data.genres
    }
  };
}