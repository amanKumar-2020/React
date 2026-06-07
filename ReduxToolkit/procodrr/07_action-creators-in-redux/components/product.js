export default function product({ id, title, price, rating, image }) {
  const filledStars = Math.round(rating);

  return (
    <article key={id} className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>{title}</h3>
      </div>
      <div className="price-rating-container">
        <p className="price">${price}</p>

        <p className="rating" aria-label={`Rating ${rating} out of 5`}>
          <span className="rating-value">{rating}</span>
          <span className="rating-stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) =>
              index < filledStars ? "★" : "☆",
            ).join(" ")}
          </span>
        </p>
      </div>
      <div className="actions">
        <button
          type="button"
          className="btn add-to-cart"
          aria-label={`Add ${title} to cart`}
          data-product-id={id}
        >
          Add to cart
        </button>
        <button
          type="button"
          className="btn buy-now"
          aria-label={`Buy ${title} now`}
          data-product-id={id}
        >
          Buy now
        </button>
      </div>
    </article>
  );
}
