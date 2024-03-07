import PostItem from "@/components/post-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const allPosts = await db.select().from(posts).orderBy(desc(posts.createAt));

  async function createPost(formData: FormData) {
    "use server";

    const content = formData.get("content")?.toString();

    if (!content) throw Error("Content must be there...");

    // mutate data
    await db.insert(posts).values({ content });
    // revalidate cache
    revalidatePath("/");
  }

  return (
    <main className="flex gap-8 col-span-8 min-h-screen flex-col items-center px-40 py-10 overflow-y-auto">
      <div className="flex items-start w-full gap-3 py-6 border-b">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <form action={createPost} className="w-full flex flex-col gap-2">
          <h3 className="font-medium text-base">Shadcn</h3>
          <Textarea
            name="content"
            className="w-full"
            placeholder="Start a new thread..."
          />
          <div className="flex justify-end">
            <Button type="submit" size={"sm"} variant={"ghost"}>
              Post
            </Button>
          </div>
        </form>
      </div>

      {allPosts.map((post) => (
        <PostItem {...{ post }} />
      ))}
    </main>
  );
}
