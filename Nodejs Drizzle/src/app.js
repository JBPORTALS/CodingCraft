import express from "express";
import { db } from "../db/index.js";
import { orders, products, users } from "../db/schema.js";
import dotenv from "dotenv";
import {
  GetAllOrderSchema,
  PatchOrderStatus,
  PlaceOrderSchema,
  UserPostSchema,
} from "./validatator/zod-schemas.js";
import { eq } from "drizzle-orm";

const app = express();
const PORT = 8000;

//initialize the .env variables on file
dotenv.config();

app.use(express.json());

// app.post("/user.post", async (req, res) => {
//   const userData = req.body;

//   try {
//     //validate/parse the incoming userData using Defined Zod Schema
//     const validatedData = UserPostSchema.parse(userData);
//     const data = await db
//       .insert(users)
//       .values({
//         email: validatedData.email,
//         name: validatedData.name,
//       })
//       .returning({ id: users.id }); //return 'id' values once data is inserted
//     res.status(201).json(data);
//   } catch (e) {
//     res.status(400).json(e); //return zod error
//   }
// });

// app.get("/user.getAll", async (req, res) => {
//   const data = await db.select().from(users);
//   res.status(201).json(data);
// });

app.post("/order.create", async (req, res) => {
  try {
    const sanitizedData = PlaceOrderSchema.parse(req.body);

    const orderDetails = await db
      .insert(orders)
      .values({
        productId: sanitizedData.productId,
        userId: sanitizedData.userId,
      })
      .returning();

    res.status(201).json(orderDetails);
  } catch (e) {
    res.status(400).json({
      message: "Bad Request",
      extra: e,
    });
  }
});

app.patch("/order.patch", async (req, res) => {
  try {
    const sanitizedData = PatchOrderStatus.parse(req.body);

    const orderDetails = await db
      .update(orders)
      .set({
        status: sanitizedData.status,
      })
      .where(eq(orders.id, sanitizedData.orderId))
      .returning();

    res.status(200).json(orderDetails);
  } catch (e) {
    res.status(400).json({
      message: "Bad Request",
      extra: e,
    });
  }
});

app.get("/order.getAll", async (req, res) => {
  try {
    const sanitizedData = GetAllOrderSchema.parse(req.body);

    const orderDetails = await db
      .select({
        orderId: orders.id,
        status: orders.status,
        products: products,
      })
      .from(orders)
      .innerJoin(products, eq(orders.productId, products.id))
      .where(eq(orders.userId, sanitizedData.userId));

    res.status(201).json(orderDetails);
  } catch (e) {
    res.status(400).json({
      message: "Bad Request",
      extra: e,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
