import React from "react";
import { useSelector } from "react-redux";
import Product from "./product";

export default function Home() {
  const productsList = useSelector((state) => state.products);
  
  return (
    <section>
      home
      <div className="section-heading">
        <h2>Products</h2>
        <p>Browse the catalog and add items to the cart.</p>
      </div>
      <div className="products-container">
        {productsList.map(({ id, title, price, rating, image }) => {
          return (
            <Product
              key={id}
              title={title}
              price={price}
              rating={rating.rate}
              image={image}
            />
          );
        })}
      </div>
    </section>
  );
}
