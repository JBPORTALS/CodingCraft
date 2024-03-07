"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="h-14 items-center sticky left-0 top-0 right-0 z-50 bg-background/65 backdrop-blur-lg w-full border-b flex justify-between px-8">
      <h1 className="text-xl font-bold">Acme</h1>
      <div className="flex gap-5">
        {/* <Link href={"/"}>
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
        </Link> */}
        <ModeToggle />
      </div>
    </nav>
  );
}
