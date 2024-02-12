import Product from "./Product";

export interface HomeProps {
  setCount: (count: number) => void;
  count: number;
}
export default function Home({ setCount, count }: HomeProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5 h-full">
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
      <Product {...{ setCount, count }} />
    </div>
  );
}
