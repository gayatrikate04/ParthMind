import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const client = await clientPromise;
    const usersCollection = client.db().collection("users");

    const { name, email, password } = req.body;

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await usersCollection.insertOne({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
}
