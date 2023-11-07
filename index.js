const { MongoClient } = require("mongodb");

const url = "mongodb://db.example.com"; // change to your
const dbName = "testDatabase";
const client = new MongoClient(url, { useUnifiedTopology: true });

async function main() {
	try {
		await client.connect();
		console.log("Connected to database");

		const db = client.db(dbName);

		const sampleData = [
			{ name: "Example 1", age: 25 },
			{ name: "Example 2", age: 30 },
			{ name: "Example 3", age: 35 },
		];

		const collection = db.collection("exampleCollection");
		const result = await collection.insertMany(sampleData);

		console.log(`${result.insertedCount} added to database`);

	} finally {

		await client.close();
	}
}

main().catch(console.error);
