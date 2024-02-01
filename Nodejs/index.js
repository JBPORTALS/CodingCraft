// import f from "fs";

// // //creating file
// // const cs = f.createWriteStream("newfile.txt");
// // cs.write("Hi, Nodejs Developers\n");
// // cs.write("Well done.");
// // cs.end();

// //reading file
// f.readFile("newfile.txt", { encoding: "utf8" }, (err, data) => {
//   if (err) throw new Error(err.message);
//   console.log(data);
// });

import { PrismaClient } from "@prisma/client";
import Express from "express";
import fs from "fs";

const app = Express();
const port = 8000;

app.use(Express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/post.getAll", async (req, res) => {
  const prisma = new PrismaClient();

  await prisma.$connect();

  //insert a post
  const response = await prisma.post.findMany({
    include: { User: true },
  });

  await prisma.$disconnect();

  res.json(response);
});

app.get("/post.getById/:postId", async (req, res) => {
  const postId = parseInt(req.params.postId);

  const prisma = new PrismaClient();

  await prisma.$connect();

  //insert a post
  const response = await prisma.post.findUnique({
    include: { User: true },
    where: {
      id: postId,
    },
  });

  await prisma.$disconnect();

  if (!response)
    res.status(404).json({ message: `No post with the id ${postId}` });

  res.json(response);
});

app.post("/post.post", async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const userId = req.body.userId;

  const prisma = new PrismaClient();

  await prisma.$connect();

  //insert a post
  const response = await prisma.post.create({
    data: { title, content, userId },
  });

  await prisma.$disconnect();

  res.status(201).json({
    id: response.id,
    title: response.title,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
