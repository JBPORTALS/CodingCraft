import {
  pgTable,
  uuid,
  text,
  timestamp,
  pgEnum,
  decimal,
  integer,
} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum("status", [
  "PLACED",
  "IN_PROGRESS",
  "CANCELLED",
  "DELIVERED",
]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
  createAt: timestamp("createdAt").defaultNow(),
});

export const cart = pgTable("cart", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("productId").references(() => products.id), //foriegn key
  userId: uuid("userId").references(() => users.id), //foriegn key
  quantity: integer("quantity").notNull().default(1),
});

export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price").notNull().default(0.0),
  createAt: timestamp("createdAt").defaultNow(),
});

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("productId").references(() => products.id), //foriegn key
  userId: uuid("userId")
    .notNull()
    .references(() => users.id),
  status: statusEnum("status").default("PLACED"),
});
