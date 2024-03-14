import { HeartIcon, MessageCircleIcon, MoreHorizontalIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import moment from "moment";

export default function PostItem({ post }: { post: any }) {
  return (
    <div className="flex flex-col w-full">
      <header className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="font-medium text-sm">Shadcn</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {moment(post.createAt).fromNow()}
          </span>
          <MoreHorizontalIcon />
        </div>
      </header>
      <div className="p-5">
        <article>{post.content}</article>
      </div>
      <footer className="flex items-center gap-3 px-5">
        <HeartIcon /> <MessageCircleIcon />
      </footer>
      <span className="px-5 text-xs py-2 text-muted-foreground">
        12K Likes, 200 Replies
      </span>
    </div>
  );
}
