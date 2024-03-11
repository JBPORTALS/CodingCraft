import { AtSignIcon } from "lucide-react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"h-full w-full flex items-center"}>
      <main className="flex-1 border-r h-full flex flex-col gap-2 items-center justify-center">
        <AtSignIcon className="h-40 w-40" />
        <h1 className="text-8xl font-semibold">Threads</h1>
        <span className="text-muted-foreground">
          which connects you with your favourite people.
        </span>
      </main>
      <div className="col-span-8 flex-1 px-16">{children}</div>
    </div>
  );
}
