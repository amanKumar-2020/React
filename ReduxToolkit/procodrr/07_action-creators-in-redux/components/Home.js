import React from "react";
import { useSelector } from "react-redux";
import Product from "./product";

export default function Home() {

  return (
    <section>
      <div className="section-heading">
        <h2>Products</h2>
        <p>Browse the catalog and add items to the cart.</p>
      </div>

      <div className="products-container">
       
      </div>
    </section>
  );
}
