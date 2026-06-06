import React from "react";
import { productsList } from "./store/productsList";

import "./App.css";

export default function App() {
  return (
    <div className="products-container">
      {productsList.map(({ id, title, price, rating, image }) => (
        <article key={id} className="product">
          <div className="product-image">
            <img src={image} alt={title} />
          </div>
          <div className="title-container">
            <h3>{title}</h3>
          </div>
          <div className="price-rating-container">
            <p className="price">${price}</p>
            <p>{rating.rate}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
