import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { database } = await connectToDatabase();
    const collection = database.collection('yourCollection'); // Replace with your collection name
    const data = await collection.find({}).toArray(); // Fetch all documents from the collection

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
