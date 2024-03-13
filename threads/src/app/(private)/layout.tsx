import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivateRootLayout({
  children,
  rightbar,
}: Readonly<{
  children: React.ReactNode;
  rightbar: React.ReactNode;
}>) {
  return (
    <div className={"h-full w-full grid grid-cols-12 overflow-hidden"}>
      <Sidebar />
      <div className="col-span-7">
        <div className="w-full flex justify-end border-b py-3 gap-5 px-8 items-center">
          <span>To make interactions with threads</span>
          <Link href={"/sign-in"}>
            <Button variant={"outline"}>Signin</Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button>Create Account</Button>
          </Link>
        </div>
        {children}
      </div>
      {rightbar}

      {/* <Suspense fallback={<ProfileSkeleton />}>
        <RightBar />
      </Suspense> */}
      {/* <ProfileSkeleton /> */}
    </div>
  );
}
