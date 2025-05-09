// pages/api/directors/[id].js
import clientPromise from '../mongo';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db();

    const director = await db.collection('directors').findOne({ id });
    if (!director) {
      return res.status(404).json({ error: 'Director not found' });
    }

    const directedMovies = await db.collection('movies').find({ directorId: id }).toArray();

    res.status(200).json({ director, directedMovies });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch director details' });
  }
}
