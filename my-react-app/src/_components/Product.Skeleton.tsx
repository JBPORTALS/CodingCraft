export default function ProductSkeleton() {
  return (
    <div className="px-3 py-4 border border-neutral-200 transition-all duration-200 rounded-md flex flex-col gap-3">
      <div className="rounded-md w-full h-72 bg-neutral-200 animate-pulse" />

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-base bg-neutral-200 h-4 w-3/4 rounded-md font-medium animate-pulse"></h2>
          <p className="text-sm h-2 bg-neutral-200 rounded-lg animate-pulse"></p>
          <p className="text-sm h-2 bg-neutral-200 rounded-lg animate-pulse"></p>
          <p className="text-sm h-2 bg-neutral-200 rounded-lg animate-pulse"></p>
          <p className="text-sm h-2 bg-neutral-200 rounded-lg animate-pulse"></p>
        </div>
        <div className="flex items-center justify-between pt-4 px-2">
          <span className="animate-pulse bg-neutral-300 h-4 w-32 rounded-md text-xl font-extrabold text-purple-900"></span>
          <div className="animate-pulse w-36 h-10 bg-neutral-300 text-sm flex items-center gap-2 justify-center text-neutral-100 px-4 py-2 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
