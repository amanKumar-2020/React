import React from "react";
import "../App.css"
export default function AddToCard({ productId, title, price, rating, image, quantity = 1 }) {
  return (
    <div className="cart-container">
      <article key={productId} className="cart-item">
        <img className="cart-item-image" src={image} alt={title} />
        <div className="cart-item-content">
          <div className="title-container">
            <h3>{title}</h3>
          </div>

          <div className="cart-item-meta">
            <p>ID: {productId}</p>
            <p>Rating: {rating}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
