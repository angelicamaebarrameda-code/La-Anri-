import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products, addToCart, cart, updateCartQuantity }) {
	const [filter, setFilter] = useState('All');
	const [search, setSearch] = useState('');
	const categories = ['All', 'Lipstick', 'Foundation', 'Eyeshadow', 'Blush On'];
	const categoryColors = {
		Lipstick: '#FFB6C1',        /* pastel-pink-2 */
		Foundation: '#CDB4DB',      /* pastel-lavender */
		Eyeshadow: '#CFE8FF',       /* pastel-blue-1 */
		'Blush On': '#FFD6E0'       /* pastel-pink-1 */
	};

	const filteredProducts = products
		.filter((p) => (filter === 'All' ? true : p.category === filter))
		.filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()));

	return (
		<div className="product-list">
			<h2>Product List</h2>

			<div className="controls">
				<input className="search" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} />
				<select onChange={(e) => setFilter(e.target.value)} value={filter}>
					{categories.map((cat) => (
						<option key={cat} value={cat}>{cat}</option>
					))}
				</select>
			</div>

			<div className="product-grid">
				{filteredProducts.map((product) => {
					const cartItem = cart.find((item) => item.id === product.id);
					const qty = cartItem ? cartItem.quantity : product.quantity;
					return (
						<div key={product.id} className="product-card">
							{product.image ? (
								<img className="product-image" src={product.image} alt={product.name} />
							) : (
								<div className="no-image">No Image</div>
							)}

							<div>
								<h3 className="product-name"><span className="color-swatch" style={{background: categoryColors[product.category] || '#ddd'}}></span><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
								<p className="product-category">{product.category}</p>
								<p className="product-price">${product.price.toFixed(2)}</p>
							</div>

							<div className="product-actions">
								<div style={{display:'flex',flexDirection:'column',gap:8}}>
									<div style={{display:'flex',alignItems:'center',gap:10}}>
										<button className="circle-btn" onClick={() => cartItem ? updateCartQuantity(product.id, -1) : null}>-</button>
										<div className="stock-note">Qty: {qty}</div>
										<button className="circle-btn" onClick={() => addToCart(product)}>+</button>
									</div>
									{cartItem && <div className="subtotal">Subtotal: ${(product.price * cartItem.quantity).toFixed(2)}</div>}
								</div>
							</div>

							<div className="card-actions">
								<Link to={`/product/${product.id}`} className="btn btn-secondary">View Details</Link>
								<button className="btn btn-pink" onClick={() => addToCart(product)}>Add to Cart</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductList;