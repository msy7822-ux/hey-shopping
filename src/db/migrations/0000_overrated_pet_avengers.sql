CREATE TABLE IF NOT EXISTS "items" (
	"id" serial PRIMARY KEY NOT NULL,
	"shoppingId" integer,
	"name" varchar(255) NOT NULL,
	"isPurchased" boolean DEFAULT false NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "shoppings" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"shopName" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);

DO $$ BEGIN
 ALTER TABLE "items" ADD CONSTRAINT "items_shoppingId_shoppings_id_fk" FOREIGN KEY ("shoppingId") REFERENCES "shoppings"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "shoppings" ADD CONSTRAINT "shoppings_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
