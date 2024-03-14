import { db } from "@/db";
import { users } from "@/db/schema";
import { genSalt, hash } from "bcrypt";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const values = await request.json();

  const isExistedUser = await db
    .select()
    .from(users)
    .where(eq(users.email, values.email));

  if (isExistedUser.length > 0)
    throw new Response("Email already existed", { status: 409 });

  // Generate salt and hashing password

  const salt = await genSalt(16);
  const hashedPassword = await hash(values.password, salt);

  const user = await db
    .insert(users)
    .values({
      username: values.username,
      password: hashedPassword,
      email: values.email,
    })
    .returning({ id: users.id });

  return Response.json({
    id: user.at(0)?.id,
  });
}
