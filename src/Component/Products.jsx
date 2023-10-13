import React from 'react';

const Products = ({ mobile, addToCart }) => (
  <div className="product-list">
    <h2>Products</h2>
    <ul>
      {mobile.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Products;