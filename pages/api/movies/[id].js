// pages/api/movies/[id].js
import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const dbName = "sjmovieinfo";

export default async function handler(req, res) {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db(dbName);

    // Match by custom string ID field
    const movie = await db.collection('movies').findOne({ id: req.query.id });

    if (!movie) return res.status(404).json({ error: 'Movie not found' });

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching movie', details: err.message });
  } finally {
    await client.close();
  }
}
