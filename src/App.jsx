import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetails.jsx';
import AddProduct from './components/AddProduct.jsx';
import Cart from './components/cart.jsx';
import './styles.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Velvet Matte Lipstick',
      category: 'Lipstick',
      price: 25,
      quantity: 50,
      image: 'https://cdn.pixabay.com/photo/2024/02/21/13/15/lipstick-8587707_1280.jpg',
      description: 'Long-lasting matte lipstick in a rich red shade.',
      specs: 'Shade: Crimson Red, Finish: Matte, Volume: 4ml',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Hydrating Foundation',
      category: 'Foundation',
      price: 40,
      quantity: 30,
      image: 'data:image/jpeg;base64,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',
      description: 'Lightweight, hydrating foundation for all-day coverage.',
      specs: 'Shade: Medium Beige, Finish: Natural, Volume: 30ml',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Shimmer Eyeshadow Palette',
      category: 'Eyeshadow',
      price: 35,
      quantity: 20,
      image: 'https://cdn.pixabay.com/photo/2016/11/22/16/45/cosmetics-1849679_640.jpg',
      description: 'Versatile palette with shimmering shades for everyday looks.',
      specs: 'Shades: 6, Finish: Shimmer, Weight: 10g',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Cream Blush On',
      category: 'Blush On',
      price: 20,
      quantity: 40,
      image: 'https://cdn.pixabay.com/photo/2017/05/16/13/25/cosmetics-2317778_640.jpg',
      description: 'Cream blush for a natural, flushed glow.',
      specs: 'Shade: Soft Peach, Finish: Dewy, Volume: 8ml',
      rating: 4.5
    }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (id, delta) => {
    setCart(cart.map((item) => item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item).filter((item) => item.quantity > 0));
  };

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const overallTotal = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="app">
      <header>
        <h1>La Anri Cosmetics</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/add">Add Product</Link> | <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
        <p>Overall Inventory Value: ${overallTotal.toFixed(2)}</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList products={products} addToCart={addToCart} cart={cart} updateCartQuantity={updateCartQuantity} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
        <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
        <Route path="/cart" element={<Cart cart={cart} updateCartQuantity={updateCartQuantity} />} />
      </Routes>
    </div>
  );
}

export default App;
