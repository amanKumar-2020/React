import React from "react";
import { Link } from "react-router";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "../react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <span>🛒</span>
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0,
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
