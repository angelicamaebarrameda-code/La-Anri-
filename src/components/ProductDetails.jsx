import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="meta">
        <h2>{product.name}</h2>
        <p className="muted"><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Specifications:</strong> {product.specs}</p>
        <p><strong>Rating:</strong> {product.rating}/5</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
        <p><strong>Subtotal:</strong> ${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
