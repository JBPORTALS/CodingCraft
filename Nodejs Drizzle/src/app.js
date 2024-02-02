import express from "express";
import { db } from "../db/index.js";
import { users } from "../db/schema.js";
import dotenv from "dotenv";
import { UserPostSchema } from "./validatator/zod-schemas.js";

const app = express();
const PORT = 8000;

//initialize the .env variables on file
dotenv.config();

app.use(express.json());

app.post("/user.post", async (req, res) => {
  const userData = req.body;

  try {
    //validate/parse the incoming userData using Defined Zod Schema
    const validatedData = UserPostSchema.parse(userData);
    const data = await db
      .insert(users)
      .values({
        email: validatedData.email,
        name: validatedData.name,
      })
      .returning({ id: users.id }); //return 'id' values once data is inserted
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json(e); //return zod error
  }
});

app.get("/user.getAll", async (req, res) => {
  const data = await db.select().from(users);
  res.status(201).json(data);
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
