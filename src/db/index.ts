import { VercelPool } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import dotenv from "dotenv";

dotenv.config();

const pool = new VercelPool({
  connectionString: process.env.POSTGRES_URL,
});

export const db = drizzle(pool, { logger: true });
