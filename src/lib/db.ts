// Postgres client
import { Client } from "pg";

let CONNECTION_STATUS = false

// Initialize the Postgres client
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Connect to the database
(async () => {
  try {
    await client.connect();
    CONNECTION_STATUS = true
    console.log("Connected to the database successfully!");
  }
  catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
)();
// Export the client for use in other parts of the application
export default client;
export {CONNECTION_STATUS}

