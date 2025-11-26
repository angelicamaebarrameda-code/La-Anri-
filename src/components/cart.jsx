import React from 'react';

function Cart({ cart, updateCartQuantity }) {
	const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

	return (
		<div className="cart">
			<h2>Cart</h2>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<div>
					{cart.map((item) => (
						<div key={item.id} className="cart-item">
							<img src={item.image} alt={item.name} />
							<p>{item.name} - ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
							<div>
								<button className="ghost" onClick={() => updateCartQuantity(item.id, 1)}>+</button>
								<button className="ghost" onClick={() => updateCartQuantity(item.id, -1)}>-</button>
							</div>
						</div>
					))}
					<p style={{marginTop:12}}><strong>Total: ${total.toFixed(2)}</strong></p>
				</div>
			)}
		</div>
	);
}

export default Cart;