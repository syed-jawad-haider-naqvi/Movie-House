import clientPromise from '../mongo';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const genres = await db.collection('genres').find({}).toArray();
    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch genres' });
  }
}
