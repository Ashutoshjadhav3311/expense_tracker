require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;
const bunyan = require("bunyan");
let log = bunyan.createLogger({ name: "tracker-db.js" });

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectMongo() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    log.info("Pinged Mongo DB. Successfully connected to MongoDB!");
  } catch (err) {
    log.info("Error while connecting to mongo db", err);
  }
}
async function addTransaction(payload) {
  try {
    const db = "main";
    let collection = "transactions";
    const result = await client
      .db(db)
      .collection(collection)
      .insertOne(payload);

    log.info("Transaction saved successfully:", result.insertedId);
  } catch (error) {
    log.info("Error while saving transaction in mongo db", err);
  }
}
module.exports = { connectMongo, addTransaction };
