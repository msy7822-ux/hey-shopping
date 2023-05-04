import {
  boolean,
  foreignKey,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const shoppings = pgTable(
  "shoppings",
  {
    id: serial("id").primaryKey(),
    userId: integer("userId").references(() => users.id),
    shopName: varchar("shopName", { length: 255 }).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (shoppings) => {
    // usersの外部キーを設定
    return {
      userFk: foreignKey({
        columns: [shoppings.userId],
        foreignColumns: [users.id],
      }),
    };
  }
);

export const items = pgTable(
  "items",
  {
    id: serial("id").primaryKey(),
    shoppingId: integer("shoppingId").references(() => shoppings.id),
    name: varchar("name", { length: 255 }).notNull(),
    isPurchased: boolean("isPurchased").default(false).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (items) => {
    // usersの外部キーを設定
    return {
      userFk: foreignKey({
        columns: [items.shoppingId],
        foreignColumns: [shoppings.id],
      }),
    };
  }
);
