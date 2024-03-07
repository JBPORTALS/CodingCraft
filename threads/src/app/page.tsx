import PostItem from "@/components/post-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { HeartIcon, MessageCircleIcon, MoreHorizontalIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-8 col-span-8 min-h-screen flex-col items-center px-40 py-10 overflow-y-auto">
      <div className="flex items-start w-full gap-3 py-6 border-b">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <form className="w-full flex flex-col gap-2">
          <h3 className="font-medium text-base">Shadcn</h3>
          <Textarea className="w-full" placeholder="Start a new thread..." />
          <div className="flex justify-end">
            <Button size={"sm"} variant={"ghost"} className="text-blue-600">
              Post
            </Button>
          </div>
        </form>
      </div>

      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </main>
  );
}
