import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsCtx } from "../store/products.ctx";
import Button from "./Button";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useContext(ProductsCtx);

  return (
    <div className="h-16 flex sticky top-0 left-0 right-0 bg-neutral-50/70 backdrop-blur-md items-center justify-between px-3 w-full border-b border-b-slate-300 z-50">
      <Link to={"/"}>
        <div className="flex items-center justify-center gap-4 text-lg font-medium">
          <img className="h-6 w-6" src="/vite.svg" />
          <h1>ViteCart</h1>
        </div>
      </Link>
      <ul className="flex gap-5 text-base items-center font-medium">
        <Link to={"/cart"} className="flex gap-2">
          <ShoppingCart />
          <div className="bg-black flex items-center justify-center text-sm text-neutral-100 px-2 rounded-full">
            {cart.length}
          </div>
        </Link>
        <Button variant="outline">Login</Button>
        <Link to={"/auth/sign-up"}>
          <Button variant="default">Signup</Button>
        </Link>
      </ul>
    </div>
  );
}
