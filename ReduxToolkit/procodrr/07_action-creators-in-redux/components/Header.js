import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
    const navigate =useNavigate();

    const handleBrandAction =()=>{
         navigate("/");
    }
    const handleAddToCardAction =()=>{
         navigate("/add-to-cart");
    }
    const handleWishList=()=>{
         navigate("/wishlist");
    }

  return (
    <header className="app-header">
      <div className="header-contents header-inner">
        <div className="brand" onClick={handleBrandAction}>
          <span className="brand-mark" aria-hidden="true">
            RS
          </span>
          <h1 className="brand-name">Redux Shop</h1>
        </div>

        <div className="header-actions" aria-label="Cart and wishlist summary">
          <button type="button" className="header-action-button" onClick={handleAddToCardAction}>
            <span className="action-icon" aria-hidden="true">
              🛒
            </span>
            <span>Add to cart</span>
            <span className="action-badge">3</span>
          </button>

          <button type="button" className="header-action-button" onClick={handleWishList}>
            <span className="action-icon" aria-hidden="true">
              💞
            </span>
            <span>Wishlist</span>
            <span className="action-badge">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
