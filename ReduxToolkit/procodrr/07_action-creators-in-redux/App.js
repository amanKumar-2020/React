import React from "react";
import { productsList } from "./store/productsList";
import Product from "./components/product";
import "./App.css";

export default function App() {
  return (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
}
