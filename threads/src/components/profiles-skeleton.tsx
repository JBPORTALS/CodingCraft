import { Skeleton } from "./ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <section className="h-full w-full border-l col-span-3">
      <div className="flex flex-col h-full overflow-y-auto">
        <header className="p-5 text-center border-b w-full">
          <span>Recommended Profiles</span>
        </header>

        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex p-3 justify-between items-center">
              <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />

                <div className="flex flex-col gap-2">
                  <Skeleton className="h-3 w-20 rounded-lg" />
                  <Skeleton className="h-2 w-12 rounded-lg" />
                </div>
              </div>

              <Skeleton className="h-9 w-20" />
            </div>
          ))}
      </div>
    </section>
  );
}
