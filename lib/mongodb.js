import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const database = client.db();

let isConnected = false;

export async function connectToDatabase() {
  if (isConnected) {
    return { client, database };
  }

  await client.connect();
  isConnected = true;
  return { client, database };
}
