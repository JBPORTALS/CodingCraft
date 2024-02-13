import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CounterProvider } from "./store/counter.ctx.tsx";
import { ProductProvider } from "./store/products.ctx.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CounterProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CounterProvider>
  </React.StrictMode>
);
