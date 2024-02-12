import { ShoppingCart } from "lucide-react";
import { HomeProps } from "./Home";

interface ProductProps extends HomeProps {}

export default function Product({ setCount, count }: ProductProps) {
  return (
    <div className=" p-3 border border-neutral-200 hover:shadow-lg transition-all duration-200 hover:cursor-pointer hover:scale-105 rounded-md flex flex-col gap-3">
      <img
        height={300}
        width={390}
        className="rounded-md"
        src="https://media.istockphoto.com/id/1183532123/photo/trang-thailand-october-24-2019-customer-lay-down-new-macbook-pro-2019-and-iphone-11-pro-are.jpg?s=612x612&w=0&k=20&c=wNW3Xg3csEqgFORvQy_v8YeB8LLaYB82gSToI1caT08="
      />

      <div className="">
        <h2 className="text-base font-medium">Product Name</h2>
        <p className="text-sm text-neutral-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          perferendis facilis at nihil soluta, mollitia voluptas necessitatibus
        </p>
        <div className="flex items-baseline justify-between pt-4 px-2">
          <span className="text-xl font-extrabold text-purple-900">
            2,00,000 ₹
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-neutral-950 text-sm flex items-center gap-2 justify-center hover:bg-neutral-900 text-neutral-100 px-4 py-2 rounded-md"
          >
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
