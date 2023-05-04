import { db } from "./index";
import { shoppings, users } from "./schema";

const seedUser = {
  name: "John Doe",
};

const seedShoppiing = (userId: number) => {
  return {
    userId: userId,
    shopName: "My Shopping",
  };
};

export async function seed() {
  const user = await db.insert(users).values(seedUser).returning();
  await db.insert(shoppings).values(seedShoppiing(user[0].id)).returning();

  console.log(`Created "users" table`);

  const userResult = await db.select().from(users).execute();
  const shoppingResult = await db.select().from(shoppings).execute();

  console.log(userResult, shoppingResult);
}
