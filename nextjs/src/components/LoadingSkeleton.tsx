import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Skeleton } from "./ui/skeleton";

export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full h-screen">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <AspectRatio ratio={4 / 3} key={index}>
            <Skeleton className="w-full rounded-none h-full" />
          </AspectRatio>
        ))}
    </div>
  );
}
