import { Delete } from "lucide-react";
import { ProductProps } from "./Product";
import { useContext } from "react";
import { ProductsCtx } from "../store/products.ctx";

interface CartItemProps extends ProductProps {}

export default function CartItem({ data }: CartItemProps) {
  const { removeItemFromCart } = useContext(ProductsCtx);
  return (
    <div className="px-5 py-4 grid-cols-3 border border-neutral-200 transition-all duration-200 rounded-md flex gap-3">
      <img
        height={288}
        className="rounded-md w-64 h-48 object-contain"
        src={data.image}
      />

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-medium">{data.title}</h2>
          <p className="text-sm text-neutral-500">
            {data.description.slice(0, 160).concat("...")}
          </p>
        </div>
        <div className="flex items-baseline justify-between pt-4 px-2">
          <span className="text-xl font-extrabold text-purple-900">
            {data.price} ₹
          </span>
          <button
            onClick={() => {
              removeItemFromCart(data.id);
            }}
            className="bg-red-600 text-sm flex items-center gap-2 justify-center hover:bg-red-800 text-neutral-100 px-4 py-2 rounded-md"
          >
            <Delete />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
