import { db } from "@/db";
import { posts } from "@/db/schema";

export async function GET(request: Request) {
  try {
    const allPosts = await db.select().from(posts);
    return Response.json(allPosts);
  } catch (e) {
    return Response.json(
      { message: "Couldn't able to load the posts!" },
      { status: 500 }
    );
  }
}
