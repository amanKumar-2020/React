import React from "react";

export default function WishList() {
  

  return (
    <section className="wishlist-section">
      <div className="wishlist-header">
        <h2>Wishlist</h2>
        <p>{wishListProducts.length} item(s)</p>
      </div>

      {wishListProducts.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-container">
          {wishListProducts.map(({ id, title, rating, price, image }) => (
            <article key={id} className="wishlist-item">
              <img className="wishlist-item-image" src={image} alt={title} />
              <div className="wishlist-item-content">
                <div className="title-container">
                  <h3>{title}</h3>
                </div>

                <div className="wishlist-item-meta">
                  <p>ID: {id}</p>
                  <p>Rating: {rating.rate}</p>
                  <p>Price: ${price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
