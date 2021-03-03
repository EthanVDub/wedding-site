const url = require('url');
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
var moment = require('moment');

let cachedDb = null;

dotenv.config();

async function connectToDatabase(uri) {
  
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  return db;
}

module.exports = async (req, res) => {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = await db.collection(process.env.MONGODB_DB);
  const request = JSON.parse(req.body);

  console.log(request);
  await collection.insert(request);

  res.status(200).json({});
}