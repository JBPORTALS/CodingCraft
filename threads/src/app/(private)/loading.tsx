import { Skeleton } from "@/components/ui/skeleton";

export default function RootLoadingPage() {
  return (
    <div className="flex gap-8 col-span-8 min-h-screen flex-col items-center px-40 py-10 overflow-y-auto">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} className="w-full h-40" />
        ))}
    </div>
  );
}
