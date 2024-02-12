import { ShoppingCart } from "lucide-react";
import MyNavLink from "./MyNavLink";

interface NavbarProps {
  count: number;
}

export default function Navbar({ count }: NavbarProps) {
  return (
    <div className="h-16 flex sticky top-0 left-0 right-0 bg-neutral-50/70 backdrop-blur-md items-center justify-between px-20 w-full border-b border-b-slate-300">
      <div className="flex items-center justify-center gap-4 text-lg font-medium">
        <img className="h-6 w-6" src="/vite.svg" />
        <h1>ViteCart</h1>
      </div>
      <ul className="flex gap-5 text-base font-medium">
        <MyNavLink to={"/"}>Home</MyNavLink>
        <MyNavLink to={"/about"}>About</MyNavLink>
        <div className="flex gap-2">
          <ShoppingCart />
          <div className="bg-black flex items-center justify-center text-sm text-neutral-100 px-2 rounded-full">
            {count}
          </div>
        </div>
      </ul>
    </div>
  );
}
