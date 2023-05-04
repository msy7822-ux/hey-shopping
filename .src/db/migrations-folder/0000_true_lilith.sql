CREATE TABLE IF NOT EXISTS "shoppings" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"shopName" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "shoppings" ADD CONSTRAINT "shoppings_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
