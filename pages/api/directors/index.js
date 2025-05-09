// export default function handler(req, res) {
//     const data = require('../../public/data.json');
    
//     // Create a mapping of directors to their movies
//     const directorMovies = {};
    
//     data.directors.forEach(director => {
//       directorMovies[director.id] = data.movies.filter(movie => 
//         movie.directorId === director.id
//       );
//     });
    
//     res.status(200).json({
//       directors: data.directors,
//       directorMovies
//     });
//   }

import clientPromise from '../mongo';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const directors = await db.collection('directors').find({}).toArray();

    res.status(200).json(directors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch directors' });
  }
}
