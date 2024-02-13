import { createContext, useEffect, useState } from "react";

export interface ProductRatingType {
  rate: number;
  count: number;
}

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ratings: ProductRatingType;
}

interface ProductsCtxDefaultType {
  products: ProductType[];
  cart: ProductType[];
  removeItemFromCart: (id: number) => void;
  addItemToCart: (product: ProductType) => void;
}

//Global Counter State
export const ProductsCtx = createContext<ProductsCtxDefaultType>({
  products: [],
  cart: [],
  removeItemFromCart: () => {},
  addItemToCart: () => {},
});

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then<ProductType[]>((res) => res);
      setProducts(response);
    } catch (e) {
      console.log(e);
    }
  }

  function addItemToCart(product: ProductType) {
    setCart((prev) => [...prev, product]);
  }

  function removeItemFromCart(id: ProductType["id"]) {
    setCart(cart.filter((p) => p.id !== id));
  }

  useEffect(() => {
    //fetch data when the component mounts
    fetchProducts();
  }, []);

  return (
    <ProductsCtx.Provider
      value={{ products, cart, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ProductsCtx.Provider>
  );
};
