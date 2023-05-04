import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const UsersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type User = InferModel<typeof UsersTable>;
export type NewUser = InferModel<typeof UsersTable, "insert">;

// Connect to Vercel Postgres
export const db = drizzle(sql);
