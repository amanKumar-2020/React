import { useSelector } from "react-redux";
import AddToCard from "../components/AddToCard";
import "../App.css"
export default function Card() {
  const cartProducts = useSelector((state) => state.addToCards);
  return (
    <section className="cart-section">
      <div className="cart-header">
        <h2>Added to Cart</h2>
        <p>{cartProducts.length} item(s)</p>
      </div>

      {cartProducts.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        cartProducts.map(
          ({ productId, title, price, rating, image, quantity =1 }) => (
            <AddToCard
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              image={image}
              rating={rating}
            />
          ),
        )
      )}
    </section>
  );
}
