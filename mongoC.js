import { MongoClient } from "mongodb";


// Create Mongo Client using URI from .env
const client = new MongoClient(process.env.MONGO_URI);

let db;

try {
  // Connect to MongoDB Atlas
  const conn = await client.connect();
  console.log("✅ MongoDB Connected Successfully");

  // Select your database name
  db = conn.db("gkdb");

} catch (error) {
  console.error("❌ MongoDB Connection Error:", error);
}

export default db;
