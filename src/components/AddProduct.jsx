import React, { useState } from 'react';
function AddProduct({ addProduct }) {
	const [formData, setFormData] = useState({
	name: '', category: '', price: '', quantity: '', image: '', description: '', specs: '', rating: ''
	});
	const categories = ['Lipstick', 'Foundation', 'Eyeshadow', 'Blush On'];
	const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const handleSubmit = (e) => {
	e.preventDefault();
	if (Object.values(formData).some((val) => !val)) {
	alert('All fields are required!');
	return;
	}
	addProduct({ ...formData, price: parseFloat(formData.price), quantity: parseInt(formData.quantity), rating: parseFloat(formData.rating) });
	setFormData({ name: '', category: '', price: '', quantity: '', image: '', description: '', specs: '', rating: '' });
	};
	return (
	<div className="add-product">
	<h2>Add New Product</h2>
	<form onSubmit={handleSubmit}>
	<input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
	<select name="category" value={formData.category} onChange={handleChange}>
		  <option value="">Select Category</option>
		  {categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
	</select>
	<input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} />
	<input name="quantity" type="number" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
	<input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
	<textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
	<input name="specs" placeholder="Specifications (e.g., Shade, Finish)" value={formData.specs} onChange={handleChange} />
	<input name="rating" type="number" step="0.1" placeholder="Rating" value={formData.rating} onChange={handleChange} />
	<button type="submit">Add Product</button>
	</form>
	</div>
	);
}
export default AddProduct;
/* ...existing code from AddProduct.js... */