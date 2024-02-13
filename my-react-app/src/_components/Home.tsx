import { useContext } from "react";
import Product from "./Product";
import { ProductsCtx } from "../store/products.ctx";
import ProductSkeleton from "./Product.Skeleton";

export default function Home() {
  const { products } = useContext(ProductsCtx);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 py-5 h-full">
      {products.length === 0
        ? Array(8)
            .fill(10)
            .map((_, index) => <ProductSkeleton key={index} />)
        : products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
    </div>
  );
}
