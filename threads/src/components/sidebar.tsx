"use client";
import { AtSignIcon, HomeIcon, UserIcon } from "lucide-react";
import NavItem from "./nav-item";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-full flex flex-col gap-5 col-span-2 border-r p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <AtSignIcon className="h-8 w-8" />
          <h4 className="text-lg font-medium">Threads</h4>
        </div>
        <ModeToggle />
      </div>
      <section className="flex flex-col gap-3">
        <Link href={"/"}>
          <NavItem isActive={pathname === "/"} className="w-full">
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </NavItem>
        </Link>

        <Link href={"/profile"} className="w-full">
          <NavItem isActive={pathname === "/profile"} className="w-full">
            <UserIcon className="mr-2 h-5 w-5" />
            Profile
          </NavItem>
        </Link>
      </section>
    </div>
  );
}
