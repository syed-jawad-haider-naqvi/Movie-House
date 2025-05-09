import clientPromise from '../mongo';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const client = await clientPromise;
    const db = client.db();

    const genre = await db.collection('genres').findOne({ id });
    if (!genre) {
      return res.status(404).json({ error: 'Genre not found' });
    }

    const movies = await db.collection('movies').find({ genreId: id }).toArray();
    res.status(200).json({ genre, movies });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies for genre' });
  }
}
