import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString)
  throw new Error("Missing DATABASE_URL environment variable");

//create a client
const client = postgres(connectionString, { max: 1 });

//create database instance to intract with the database
export const db = drizzle(client);
