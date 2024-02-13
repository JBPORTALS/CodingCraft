import { ShoppingCart } from "lucide-react";
import MyNavLink from "./MyNavLink";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsCtx } from "../store/products.ctx";

export default function Navbar() {
  const { cart } = useContext(ProductsCtx);

  return (
    <div className="h-16 flex sticky top-0 left-0 right-0 bg-neutral-50/70 backdrop-blur-md items-center justify-between px-3 md:px-20 w-full border-b border-b-slate-300 z-50">
      <div className="flex items-center justify-center gap-4 text-lg font-medium">
        <img className="h-6 w-6" src="/vite.svg" />
        <h1>ViteCart</h1>
      </div>
      <ul className="flex gap-5 text-base font-medium">
        <MyNavLink to={"/"}>Home</MyNavLink>
        <MyNavLink to={"/about"}>About</MyNavLink>
        <Link to={"/cart"} className="flex gap-2">
          <ShoppingCart />
          <div className="bg-black flex items-center justify-center text-sm text-neutral-100 px-2 rounded-full">
            {cart.length}
          </div>
        </Link>
      </ul>
    </div>
  );
}
