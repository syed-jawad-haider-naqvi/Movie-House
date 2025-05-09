import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const dbName = "sjmovieinfo";

export default async function handler(req, res) {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const movies = await db.collection('movies').find({}).toArray();
    res.status(200).json(movies);

  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err.message });
  } finally {
    await client.close(); // good practice to close connection
  }
}
