"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="h-full items-left w-56 border-r border-b-slate-600 flex flex-col gap-5 p-8">
      <Link href={"/dashboard"}>
        <span
          className={
            pathname === "/dashboard"
              ? "underline underline-offset-4"
              : "no-underline"
          }
        >
          Dashboard
        </span>
      </Link>
      <Link href={"/dashboard/settings"}>
        <span
          className={
            pathname === "/dashboard/settings"
              ? "underline underline-offset-4"
              : "no-underline"
          }
        >
          Settings
        </span>
      </Link>
    </nav>
  );
}
