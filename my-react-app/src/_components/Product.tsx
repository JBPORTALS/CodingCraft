import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { ProductType, ProductsCtx } from "../store/products.ctx";
import Button from "./Button";

export interface ProductProps {
  data: ProductType;
}

export default function Product({ data }: ProductProps) {
  const { addItemToCart } = useContext(ProductsCtx);
  return (
    <div className="px-3 py-4 border border-neutral-200 hover:shadow-lg transition-all duration-200 hover:cursor-pointer hover:scale-105 rounded-md flex flex-col gap-3">
      <img
        height={288}
        className="rounded-md w-full h-72 object-contain"
        src={data.image}
      />

      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-medium">{data.title}</h2>
          <p className="text-sm text-neutral-500">
            {data.description.slice(0, 60).concat("...")}
          </p>
        </div>
        <div className="flex items-baseline justify-between pt-4 px-2">
          <span className="text-xl font-extrabold text-purple-900">
            {data.price} ₹
          </span>
          <Button variant={"outline"} onClick={() => addItemToCart(data)}>
            <ShoppingCart />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
