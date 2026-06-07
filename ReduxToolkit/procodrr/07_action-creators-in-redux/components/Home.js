import React from "react";
import { useSelector } from "react-redux";
import Product from "./product";

export default function Home() {
  const productsList = useSelector((state) => state.products);

  return (
    <section>
      <div className="section-heading">
        <h2>Products</h2>
        <p>Browse the catalog and add items to the cart.</p>
      </div>

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
    </section>
  );
}
