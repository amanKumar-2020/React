import React from 'react'
import { useSelector } from 'react-redux'

export default function AddToCard() {
	const cartProducts = useSelector((state) => state.addToCard);

	return (
		<section className="cart-section">
			<div className="cart-header">
				<h2>Added to Cart</h2>
				<p>{cartProducts.length} item(s)</p>
			</div>

			{cartProducts.length === 0 ? (
				<p className="empty-cart">Your cart is empty.</p>
			) : (
				<div className="cart-container">
					{cartProducts.map(({ id, title, rating, price, image, quantity }) => (
						<article key={id} className="cart-item">
							<img className="cart-item-image" src={image} alt={title} />
							<div className="cart-item-content">
								<div className="title-container">
									<h3>{title}</h3>
								</div>

								<div className="cart-item-meta">
									<p>ID: {id}</p>
									<p>Rating: {rating.rate}</p>
									<p>Price: ${price}</p>
									<p>Quantity: {quantity}</p>
								</div>
							</div>
						</article>
					))}
				</div>
			)}
		</section>
	)
}
