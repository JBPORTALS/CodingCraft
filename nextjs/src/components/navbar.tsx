"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-14 items-center w-full border-b border-b-slate-600 flex justify-between px-8">
      <h1 className="text-xl font-bold text-white">Acme</h1>
      <div className="flex gap-5">
        <Link href={"/"}>
          <span
            className={
              pathname === "/" ? "underline underline-offset-4" : "no-underline"
            }
          >
            Home
          </span>
        </Link>
        <Link href={"/blog"}>
          <span
            className={
              pathname === "/blog"
                ? "underline underline-offset-4"
                : "no-underline"
            }
          >
            Blog
          </span>
        </Link>
        <Link href={"/about"}>
          <span
            className={
              pathname === "/about"
                ? "underline underline-offset-4"
                : "no-underline"
            }
          >
            About
          </span>
        </Link>
        <Link href={"/contact-us"}>
          <span
            className={
              pathname === "/contact-us"
                ? "underline underline-offset-4"
                : "no-underline"
            }
          >
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
}
